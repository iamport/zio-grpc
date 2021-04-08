import Settings.stdSettings

val Scala300 = "3.0.0-RC2"

val Scala213 = "2.13.5"

val Scala212 = "2.12.13"

ThisBuild / resolvers += Resolver.sonatypeRepo("snapshots")

ThisBuild / scalaVersion := Scala212

publish / skip := true

sonatypeProfileName := "com.thesamet"

inThisBuild(
  List(
    organization := "com.thesamet.scalapb.zio-grpc",
    homepage := Some(url("https://github.com/scalapb/zio-grpc")),
    licenses := List(
      "Apache-2.0" -> url("http://www.apache.org/licenses/LICENSE-2.0")
    ),
    developers := List(
      Developer(
        "thesamet",
        "Nadav Samet",
        "thesamet@gmail.com",
        url("https://www.thesamet.com")
      )
    )
  )
)

lazy val core = crossProject(JSPlatform, JVMPlatform)
  .in(file("core"))
  .settings(stdSettings)
  .settings(
    crossScalaVersions := Seq(Scala212, Scala213),
    name := "zio-grpc-core",
    libraryDependencies ++= Seq(
      "dev.zio" %%% "zio"          % Version.zio,
      "dev.zio" %%% "zio-streams"  % Version.zio,
      "dev.zio" %%% "zio-test"     % Version.zio % "test",
      "dev.zio" %%% "zio-test-sbt" % Version.zio % "test"
    )
  )
  .jvmSettings(
    libraryDependencies ++= Seq(
      "io.grpc" % "grpc-services" % Version.grpc
    )
  )
  .jsConfigure(
    _.enablePlugins(ScalaJSBundlerPlugin)
  )
  .jsSettings(
    libraryDependencies ++= Seq(
      "com.thesamet.scalapb.grpcweb" %%% "scalapb-grpcweb" % "0.6.2",
      "io.github.cquiroz"            %%% "scala-java-time" % "2.2.1" % "test"
    ),
    Compile / npmDependencies += "grpc-web" -> "1.2.1"
  )

lazy val codeGen = projectMatrix
  .in(file("code-gen"))
  .defaultAxes()
  .enablePlugins(BuildInfoPlugin)
  .settings(stdSettings)
  .settings(
    buildInfoKeys := Seq[BuildInfoKey](name, version, scalaVersion, sbtVersion),
    buildInfoPackage := "scalapb.zio_grpc",
    name := "zio-grpc-codegen",
    libraryDependencies ++= Seq(
      "com.thesamet.scalapb"   %% "compilerplugin"          % scalapb.compiler.Version.scalapbVersion,
      "org.scala-lang.modules" %% "scala-collection-compat" % "2.4.3"
    )
  )
  .jvmPlatform(scalaVersions = Seq(Scala212, Scala213))

lazy val codeGenJVM212 = codeGen.jvm(Scala212)

lazy val protocGenZio = protocGenProject("protoc-gen-zio", codeGenJVM212)
  .settings(
    Compile / mainClass := Some("scalapb.zio_grpc.ZioCodeGenerator"),
    assembly / assemblyMergeStrategy := {
      case PathList("scala", "annotation", "nowarn.class" | "nowarn$.class") =>
        MergeStrategy.first
      case x                                                                 =>
        (assembly / assemblyMergeStrategy).value.apply(x)
    }
  )

lazy val e2e = project
  .in(file("e2e"))
  .dependsOn(core.jvm)
  .enablePlugins(LocalCodeGenPlugin)
  .settings(stdSettings)
  .settings(
    crossScalaVersions := Seq(Scala212, Scala213),
    publish / skip := true,
    libraryDependencies ++= Seq(
      "dev.zio"              %% "zio-test"             % Version.zio % "test",
      "dev.zio"              %% "zio-test-sbt"         % Version.zio % "test",
      "com.thesamet.scalapb" %% "scalapb-runtime-grpc" % scalapb.compiler.Version.scalapbVersion,
      "io.grpc"               % "grpc-netty"           % Version.grpc
    ),
    Compile / PB.targets := Seq(
      scalapb.gen(grpc = true) -> (Compile / sourceManaged).value,
      genModule(
        "scalapb.zio_grpc.ZioCodeGenerator$"
      )                        -> (Compile / sourceManaged).value
    ),
    PB.protocVersion := "3.13.0",
    codeGenClasspath := (codeGenJVM212 / Compile / fullClasspath).value,
    testFrameworks += new TestFramework("zio.test.sbt.ZTestFramework")
  )

lazy val docs = project
  .enablePlugins(LocalCodeGenPlugin)
  .in(file("zio-grpc-docs"))
  .dependsOn(core.jvm)
  .settings(
    crossScalaVersions := Seq(Scala212),
    publish / skip := true,
    moduleName := "zio-grpc-docs",
    mdocVariables := Map(
      "sbtProtocVersion" -> "1.0.2",
      "grpcVersion"      -> "1.37.0",
      "zioGrpcVersion"   -> "0.5.0",
      "scalapbVersion"   -> scalapb.compiler.Version.scalapbVersion
    ),
    libraryDependencies ++= Seq(
      "io.grpc"               % "grpc-netty"           % Version.grpc,
      "com.thesamet.scalapb" %% "scalapb-runtime-grpc" % scalapb.compiler.Version.scalapbVersion
    ),
    libraryDependencySchemes += "com.thesamet.scalapb" %% "scalapb-runtime" % "always",
    Compile / PB.targets := Seq(
      scalapb.gen(grpc = true) -> (Compile / sourceManaged).value,
      genModule(
        "scalapb.zio_grpc.ZioCodeGenerator$"
      )                        -> (Compile / sourceManaged).value
    ),
    codeGenClasspath := (codeGenJVM212 / Compile / fullClasspath).value
  )
  .enablePlugins(MdocPlugin, DocusaurusPlugin)
