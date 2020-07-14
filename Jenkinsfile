pipeline {
    agent any

    stages {
        stage('Git Pull') {
            steps {
                git credentialsId: '36cfe953-999f-4001-8bea-d77a3b4b50bf', url: 'https://github.com/dev-slatto/repo-orders'
            }
        }
        stage('Read JSON file') {
            steps {
                fileExists './order.json',
                def data = readFile './order.json',
                echo data
            }
        }
        stage('Print params'){
            steps {
                 echo 'Hello'
                
            }
        } 
    }
}
