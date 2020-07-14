pipeline {
    agent any

    stages {
        stage('Git Pull') {
            steps {
                git credentialsId: '36cfe953-999f-4001-8bea-d77a3b4b50bf', url: 'https://github.com/dev-slatto/repo-orders'
            }
        }
        stage('JSON file exists') {
            steps {
                fileExists './order.json'
            }
        }
        stage('Read JSON file') {
            steps {
                readFile './order.json'
            }
        }
        stage('Print params'){
            steps {
                 echo 'Hello'
                
            }
        } 
    }
}
