const sonarqubeScanner = require('mysonar');

sonarqubeScanner({
  serverUrl: 'https://sonar.sidhudevops.co.in/',
       options : {
	    'sonar.projectDescription': 'This is a Node JS application',
	    'sonar.projectName': 'nodesample',
	    'sonar.projectKey':'nodesample',
	    'sonar.login': 'eb668c07f2fe44619e01650c1b377a791a33b6c3',
	    //'sonar.login': 'admin',
	    //'sonar.password': 'admin',
            'sonar.projectVersion':'1.0',
	    'sonar.language':'js',
            'sonar.sourceEncoding':'UTF-8',
            'sonar.sources': '.',
	  //'sonar.tests': 'specs',
          //'sonar.inclusions' : 'src/**'
       },
}, () => {});
