(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{151:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return i})),a.d(t,"metadata",(function(){return o})),a.d(t,"rightToc",(function(){return p})),a.d(t,"default",(function(){return s}));var n=a(2),l=a(9),r=(a(0),a(170)),i={title:"Quick Start"},o={id:"quickstart",isDocsHomePage:!1,title:"Quick Start",description:"This guide gets you started with ZIO gRPC with a simple working example.",source:"@site/../zio-grpc-docs/target/mdoc/quickstart.md",permalink:"/zio-grpc/docs/quickstart",editUrl:"https://github.com/scalapb/zio-grpc/edit/master/foo/docs/../zio-grpc-docs/target/mdoc/quickstart.md",sidebar:"someSidebar",previous:{title:"Introduction",permalink:"/zio-grpc/docs/"},next:{title:"Basics Tutorial",permalink:"/zio-grpc/docs/basics"}},p=[{value:"Prerequisites",id:"prerequisites",children:[]},{value:"Get the example code",id:"get-the-example-code",children:[]},{value:"Run the example",id:"run-the-example",children:[]},{value:"Update a gRPC service",id:"update-a-grpc-service",children:[]},{value:"Update the app",id:"update-the-app",children:[{value:"Update the server",id:"update-the-server",children:[]},{value:"Update the client",id:"update-the-client",children:[]}]},{value:"Run the updated app",id:"run-the-updated-app",children:[]},{value:"What&#39;s next",id:"whats-next",children:[]}],c={rightToc:p};function s(e){var t=e.components,a=Object(l.a)(e,["components"]);return Object(r.b)("wrapper",Object(n.a)({},c,a,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"This guide gets you started with ZIO gRPC with a simple working example."),Object(r.b)("h2",{id:"prerequisites"},"Prerequisites"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"https://jdk.java.net"}),"JDK")," version 8 or higher"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"https://www.scala-sbt.org/"}),"SBT"))),Object(r.b)("h2",{id:"get-the-example-code"},"Get the example code"),Object(r.b)("p",null,"The example code is part of the ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/scalapb/zio-grpc"}),"zio-grpc")," repository."),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/scalapb/zio-grpc/archive/v0.4.0-RC1.zip"}),"Download the repo as a zip file")," and unzip it, or clone the repo:"),Object(r.b)("pre",{parentName:"li"},Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"git clone https://github.com/scalapb/zio-grpc\n"))),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"Change to the examples directory:"),Object(r.b)("pre",{parentName:"li"},Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"cd zio-grpc/examples\n")))),Object(r.b)("h2",{id:"run-the-example"},"Run the example"),Object(r.b)("p",null,"From the ",Object(r.b)("inlineCode",{parentName:"p"},"examples")," directory:"),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"Run the server:"),Object(r.b)("pre",{parentName:"li"},Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),'sbt "runMain zio_grpc.examples.helloworld.HelloWorldServer"\n'))),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"From another terminal, run the client:"),Object(r.b)("pre",{parentName:"li"},Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),'sbt "runMain zio_grpc.examples.helloworld.HelloWorldClient"\n')))),Object(r.b)("p",null,"Congratulations! You\u2019ve just run a client-server application with ZIO gRPC."),Object(r.b)("h2",{id:"update-a-grpc-service"},"Update a gRPC service"),Object(r.b)("p",null,"In this section you\u2019ll update the application by adding an extra server method. The gRPC service is defined using ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://developers.google.com/protocol-buffers"}),"protocol buffers"),". To learn more about how to define a service in a ",Object(r.b)("inlineCode",{parentName:"p"},".proto")," file see ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"/zio-grpc/docs/basics"}),"Basics Tutorial"),". For now, all you need to know is that both the server and the client stub have a ",Object(r.b)("inlineCode",{parentName:"p"},"SayHello()")," RPC method that takes a ",Object(r.b)("inlineCode",{parentName:"p"},"HelloRequest")," parameter from the client and returns a ",Object(r.b)("inlineCode",{parentName:"p"},"HelloReply")," from the server, and that the method is defined like this:"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-protobuf"}),"// The greeting service definition.\nservice Greeter {\n  // Sends a greeting\n  rpc SayHello (HelloRequest) returns (HelloReply) {}\n}\n\n// The request message containing the user's name.\nmessage HelloRequest {\n  string name = 1;\n}\n\n// The response message containing the greetings\nmessage HelloReply {\n  string message = 1;\n}\n")),Object(r.b)("p",null,"Open ",Object(r.b)("inlineCode",{parentName:"p"},"src/main/protobuf/helloworld.proto")," and add a new ",Object(r.b)("inlineCode",{parentName:"p"},"SayHelloAgain()")," method with the same request and response types as ",Object(r.b)("inlineCode",{parentName:"p"},"SayHello()"),"."),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-protobuf"}),"// The greeting service definition.\nservice Greeter {\n  // Sends a greeting\n  rpc SayHello (HelloRequest) returns (HelloReply) {}\n  // Sends another greeting\n  rpc SayHelloAgain (HelloRequest) returns (HelloReply) {}\n}\n\n// The request message containing the user's name.\nmessage HelloRequest {\n  string name = 1;\n}\n\n// The response message containing the greetings\nmessage HelloReply {\n  string message = 1;\n}\n")),Object(r.b)("p",null,"Remember to save the file!"),Object(r.b)("h2",{id:"update-the-app"},"Update the app"),Object(r.b)("p",null,"The next time we compile the app (using ",Object(r.b)("inlineCode",{parentName:"p"},"compile")," in sbt), ZIO gRPC will regenerate ",Object(r.b)("inlineCode",{parentName:"p"},"ZioHelloworld.scala")," which contains a trait with the service definition. The trait has an abstract method for which RPC method. Therefore, with the new method added to the trait, we expect the compilation of ",Object(r.b)("inlineCode",{parentName:"p"},"HelloWorldServer.scala")," to fail, since the method ",Object(r.b)("inlineCode",{parentName:"p"},"sayHelloAgain")," will be undefined."),Object(r.b)("p",null,"Let's implement the new method in the server and call it from the client."),Object(r.b)("h3",{id:"update-the-server"},"Update the server"),Object(r.b)("p",null,"Open ",Object(r.b)("inlineCode",{parentName:"p"},"src/main/scala/zio_grpc/examples/helloworld/HelloWorldServer.scala"),", and add the following method to ",Object(r.b)("inlineCode",{parentName:"p"},"GreeterImpl"),":"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-scala"}),'def sayHelloAgain(request: HelloRequest) =\n  ZIO.succeed(HelloReply(s"Hello again, ${request.name}"))\n')),Object(r.b)("h3",{id:"update-the-client"},"Update the client"),Object(r.b)("p",null,"Open ",Object(r.b)("inlineCode",{parentName:"p"},"src/main/scala/zio_grpc/examples/helloworld/HelloWorldClient.scala"),", and add the following method to ",Object(r.b)("inlineCode",{parentName:"p"},"GreeterImpl"),":"),Object(r.b)("p",null,"Update the definition of ",Object(r.b)("inlineCode",{parentName:"p"},"myAppLogic"),":"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-scala"}),'def myAppLogic =\n  for {\n    r <- GreeterClient.sayHello(HelloRequest("World"))\n    _ <- putStrLn(r.message)\n    s <- GreeterClient.sayHelloAgain(HelloRequest("World"))\n    _ <- putStrLn(s.message)\n  } yield ()\n')),Object(r.b)("h2",{id:"run-the-updated-app"},"Run the updated app"),Object(r.b)("p",null,"If you still have the previous version of the server running, stop it by hitting ",Object(r.b)("inlineCode",{parentName:"p"},"Ctrl-C"),". Run the server and client like you did before. Execute the following command from the ",Object(r.b)("inlineCode",{parentName:"p"},"examples")," directory:"),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"Run the server:"),Object(r.b)("pre",{parentName:"li"},Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),'sbt "runMain zio_grpc.examples.helloworld.HelloWorldServer"\n'))),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"From another terminal, run the client:"),Object(r.b)("pre",{parentName:"li"},Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),'sbt "runMain zio_grpc.examples.helloworld.HelloWorldClient"\n')))),Object(r.b)("h2",{id:"whats-next"},"What's next"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Work through the ",Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"/zio-grpc/docs/basics"}),"Basics Tutorial"),".")))}s.isMDXComponent=!0}}]);