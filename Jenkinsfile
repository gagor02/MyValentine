pipeline {
    agent any
    
    environment {
        // CAMBIA ESTO POR TU USUARIO REAL
        DOCKER_IMAGE = 'gagor02/myvalentine'
        DOCKER_CREDENTIALS_ID = 'docker_hub' // El ID que pusiste en Jenkins
        KUBECONFIG_ID = 'kubernetes_config'  // El ID que pusiste en Jenkins
    }
    
    stages {
        stage('Checkout') {
            steps {
                git branch: 'main', url: 'https://github.com/gagor02/MyValentine'
            }
        }
        
        stage('Build Docker Image') {
            steps {
                script {
                    sh "docker build -t ${DOCKER_IMAGE}:${BUILD_NUMBER} ."
                    sh "docker tag ${DOCKER_IMAGE}:${BUILD_NUMBER} ${DOCKER_IMAGE}:latest"
                }
            }
        }
        
        stage('Push to Docker Hub') {
            steps {
                script {
                    withCredentials([usernamePassword(credentialsId: DOCKER_CREDENTIALS_ID, passwordVariable: 'DOCKER_PASS', usernameVariable: 'DOCKER_USER')]) {
                        sh "docker login -u ${DOCKER_USER} -p ${DOCKER_PASS}"
                        sh "docker push ${DOCKER_IMAGE}:${BUILD_NUMBER}"
                        sh "docker push ${DOCKER_IMAGE}:latest"
                    }
                }
            }
        }
        
        stage('Deploy to Kubernetes') {
            steps {
                script {
                    withKubeConfig([credentialsId: KUBECONFIG_ID]) {
                        // Reemplaza la imagen en el YAML con la versión nueva
                        sh "sed -i 's|gagor02/myvalentine:latest|${DOCKER_IMAGE}:${BUILD_NUMBER}|g' k8s-deploy.yaml"
                        sh "kubectl apply -f deployment-svc.yaml"
                    }
                }
            }
        }
    }
}