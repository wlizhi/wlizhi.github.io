#!/bin/bash
nohup java -jar -Dserver.port=8081 /usr/local/springboot/blog-auto-deploy-springboot-0.0.1-SNAPSHOT.jar > /usr/local/springboot/logs/blog-deploy-springboot-8081.out 2>&1 &