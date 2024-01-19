pipeline {
    agent any
    
    tools {nodejs "node"}

    stages {
        stage('Build') {
            steps {
                git branch: 'main', url: 'https://github.com/siw-ss/devops-automation-front.git'
                bat 'npm install'
                bat 'npm run build'
            }
        }
        stage('SonarQube Analysis'){
            steps{
                script{
                    bat "npm run sonar"
               }
            }
        }
        stage('Build Docker Image'){
            steps{
                script{
                    sh 'docker build -t siwss/devops-integration-front .'
                }
            }
        }
        stage('Push image to DockerHub'){
            steps{
                script{
                    withCredentials([string(credentialsId: 'dockerhubpwd', variable: 'dockerhubpwd')]) {
                    sh 'docker login -u siwss -p ${dockerhubpwd}'
                    }
                    sh 'docker push siwss/devops-integration-front'
                }
            }
        }
        stage('Deploy on Kubernetes'){
            steps{
                script{
                    kubernetesDeploy(configs: "deploymentfrontend.yaml", kubeconfigId: "kubernetes")
                }
            }
        }
    }
    post {
        success {
            slackSend color: '#36a64f', message: "Deployment of backend with k8s succeeded!"
        }
        failure {
            slackSend color: '#ff0000', message: "Deployment of backend with k8s failed!"
        }
    } 
}
