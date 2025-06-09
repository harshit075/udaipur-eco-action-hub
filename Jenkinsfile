pipeline {
    agent any

    environment {
        NODE_HOME = tool name: 'NodeJS 18', type: 'NodeJSInstallation'
        PATH = "${NODE_HOME}/bin:${env.PATH}"
    }

    stages {
        stage('Clone Repository') {
            steps {
                git 'https://github.com/yourusername/yourproject.git'
            }
        }

        stage('Install Dependencies') {
            steps {
                sh 'npm install'
            }
        }

        stage('Build') {
            steps {
                sh 'npm run build'
            }
        }

        stage('Deploy to NGINX') {
            steps {
                sh 'sudo cp -r build/* /var/www/html/'
            }
        }
    }
}
