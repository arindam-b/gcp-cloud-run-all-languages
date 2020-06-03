mvn io.quarkus:quarkus-maven-plugin:0.19.1:create -DprojectGroupId=fr.arindam.k8s -DprojectArtifactId=k8s-ops -DclassName="fr.arindam.k8s.MainOperatorResource" -Dpath="/hello"

mvn compile quarkus:dev

http://localhost:8080/hello

mvn clean package -DskipTests

docker build -f src/main/docker/Dockerfile.jvm -t quarkus-test .