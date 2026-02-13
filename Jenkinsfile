pipeline {
    agent any
    
    environment {
        // CAMBIA ESTO POR TU USUARIO REAL
        DOCKER_IMAGE = 'gagor0202/myvalentine'
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
                        // 1. Aplica el archivo base (esto pone la imagen en :latest)
                        sh "kubectl apply -f deployment-svc.yaml"
                        
                        // 2. FUERZA la actualización al número de build actual
                        // Estructura: deployment/<nombre-del-deploy> <nombre-del-contenedor>=<imagen>
                        
                        // AQUÍ ESTABA EL DETALLE: El contenedor se llama 'myvalentine' en tu YAML
                        sh "kubectl set image deployment/react-app-deployment myvalentine=${DOCKER_IMAGE}:${BUILD_NUMBER}"
                        
                        // 3. Verifica el estado del cambio
                        sh "kubectl rollout status deployment/react-app-deployment"
                        
                        // 4. (Opcional) Imprime qué imagen quedó para que lo veas en los logs de Jenkins
                        sh "kubectl get deployment react-app-deployment -o=jsonpath='{.spec.template.spec.containers[0].image}'"
                    }
                }
            }
        }

        // stage('Deploy deployment and service file') {
        //     steps {
        //         script {
        //             withKubeConfig([credentialsId: 'KUBECONFIG_ID']) {
        //                 // 1. Aplica la configuración (como ya tenías)
        //                 sh 'kubectl apply -f deployment-svc.yaml'
                        
        //                 // 2. AGREGA ESTO: Obliga a bajar la nueva imagen
        //                 // (Cambia '' por el nombre real que te salió en el paso anterior)
        //                 sh 'kubectl rollout restart deployment react-app-deployment'
        //             }
        //         }
        //     }
        // }
    }
}
