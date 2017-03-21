const proxyMiddleware = require('proxy-middleware');
const loadGruntTasks = require('load-grunt-tasks');
const timeGrunt = require('time-grunt');

module.exports = (grunt) => {
  // Load grunt tasks automatically
  loadGruntTasks(grunt);
  // Time how long tasks take. Can help when optimizing build times
  timeGrunt(grunt);

  const appConfig = {
    app: 'app',
    dist: 'dist'
  };

  grunt.config.init({
    appConfig,
    watch: {
      jsTestDev: {
        files: ['test/unit/spec/**/*.js'],
        tasks: ['karma:dev']
      }
    },


    connect: {
      functional: {
        options: {
          open: false,
          livereload: false,
          keepalive: false,
          middleware: (connect) => {
            const app = connect();

            return [
              app.use('/sagui-api', proxyMiddleware(grunt.config.process('<%= appConfig.saguiApi %>'))),
              connect.static('.tmp/'),
              connect.static('test/'),
              connect.static('./'),
              connect.static(appConfig.app)
            ];
          }
        }
      }
    },

    clean: {
      options: {
        force: true
      },
      server: '.tmp/',
      coverage: {
        files: [{
          dot: true,
          src: [
            'test/reports/coverage',
            'test/reports/jasmine',
            '.tmp/coverage/'
          ]
        }]
      }
    },


    protractor: {
      options: {
        keepAlive: false,
        configFile: 'src/protractor.conf.js',
        noColor: false
      },
      ifood: {
        options: {
          keepAlive: false,
          args: {
            baseUrl: '',
            params: {
              login: {
                user: 'fiaobot@gmail.com', // TODO take the login credentials from STDIN
                password: 'Fi@o1234'
              },
              envprod: false
            }
          }
        }
      }
    }
  });
};
