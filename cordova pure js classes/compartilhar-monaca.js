//works only in android projects via monaca, it requires the plugin: mobi.monaca.plugins.Share

function shareApp() {
      window.plugins.share.show(
          {
              subject: 'Compartilhe esse app!',
              text: 'text share me!'
          },
          function() {}, // Success function
          function() {alert('Falha ao compartilhar')} // Failure function
      );
    }