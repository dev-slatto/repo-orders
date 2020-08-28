def ORDER_DEVELOPER
def ORDER_MANUFACTURE
def ORDER_PRODUCT
def ORDER_DESCRIPTION
def ORDER_DOCUMENTATION
def ORDER_DOCUMENTATION_COMMENT
def GIT_CREDENTIALS

pipeline {
    agent any

    stages {
        stage('Git Pull') {
            steps {
                git credentialsId: GIT_CREDENTIALS, url: 'https://github.com/dev-slatto/repo-orders'
            }
        }
        stage('JSON file exists') {
            steps {
                fileExists './order.json'
            }
        }
        stage("Map JSON file") {
            steps {
                script {
                    def props = readJSON file: './order.json'
                    def developer = props.developer
                    def manufacture = props.manufacture
                    def product = props.product
                    def description = props.description
                    def documentation = props.documentation
                    def documentation_comment = props.documentation_comment
                
                    ORDER_DEVELOPER = developer
                    ORDER_MANUFACTURE = manufacture
                    ORDER_PRODUCT = product
                    ORDER_DESCRIPTION = description
                    ORDER_DOCUMENTATION = documentation
                    ORDER_DOCUMENTATION_COMMENT = description
                }
            }
        }
        stage('Print params'){
            steps {
                echo ORDER_DEVELOPER
                echo ORDER_MANUFACTURE
                echo ORDER_PRODUCT
                echo ORDER_DESCRIPTION
                echo ORDER_DOCUMENTATION
                echo ORDER_DOCUMENTATION_COMMENT
            }
        }
        stage('Create repo') {
            steps {
                withCredentials([usernamePassword
                                    (credentialsId: GIT_CREDENTIALS, 
                                     passwordVariable: 'GITHUB_PASSWORD', 
                                     usernameVariable: 'GITHUB_USERNAME')
                                ]) 
                {
                  sh 'echo $ORDER_DEVELOPER'
                }
            }
        }
    }
    
    post {
        always {
            script {
                if (currentBuild.currentResult == 'FAILURE') {
                    slackSend color: "danger", message: "*${env.JOB_NAME}* - Build <${env.BUILD_URL}|${env.BUILD_DISPLAY_NAME}> failed! :cry:"
                } else if (currentBuild.currentResult == 'UNSTABLE') {
                    slackSend color: "danger", message: "*${env.JOB_NAME}* - Build <${env.BUILD_URL}|${env.BUILD_DISPLAY_NAME}> unstable! :warning:"
                } else {
                    slackSend color: "good", message: "*${env.JOB_NAME}* - Build <${env.BUILD_URL}|${env.BUILD_DISPLAY_NAME}> succeeded! :tada:"
                }
            }
        }
    }
}