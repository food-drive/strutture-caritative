require('dotenv').config()

const buildCredentials = ({
  PROJECT_ID,
  SERVICE_ACCOUNT,
  PRIVATE_ACCESS_KEY,
  PRIVATE_KEY_ID,
  CLIENT_ID,
  ...rest
}) => {
  console.log('Project id', PROJECT_ID)
  console.log(SERVICE_ACCOUNT)
  console.log(PRIVATE_ACCESS_KEY)
  console.log(PRIVATE_KEY_ID)
  console.log(CLIENT_ID)
  console.log(rest)
  return {
    type: 'service_account',
    project_id: PROJECT_ID,
    private_key_id: PRIVATE_ACCESS_KEY,
    private_key: PRIVATE_ACCESS_KEY.replace(/(\\r)|(\\n)/g, '\n'),
    client_email: `${SERVICE_ACCOUNT}@${PROJECT_ID}.iam.gserviceaccount.com`,
    client_id: CLIENT_ID,
    auth_uri: 'https://accounts.google.com/o/oauth2/auth',
    token_uri: 'https://oauth2.googleapis.com/token',
    auth_provider_x509_cert_url: 'https://www.googleapis.com/oauth2/v1/certs',
    client_x509_cert_url: `https://www.googleapis.com/robot/v1/metadata/x509/${SERVICE_ACCOUNT}%40${PROJECT_ID}.iam.gserviceaccount.com`,
  }
}

module.exports = {
  siteMetadata: {
    title: 'Strutture Caritative',
  },
  pathPrefix: '/strutture-caritative',
  plugins: [
    'gatsby-plugin-react-helmet-async',
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    'gatsby-plugin-material-ui',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'strutture-caritative',
        short_name: 'strutture-caritative',
        start_url: '/',
        background_color: '#FFFFFF',
        theme_color: '#FFFFFF',
        display: 'minimal-ui',
      },
    },
    {
      resolve: 'gatsby-source-google-sheets',
      options: {
        spreadsheetId: process.env.SPREADSHEET_ID,
        worksheetTitle: 'Anagrafica',
        credentials: buildCredentials(process.env),
      },
    },
    'gatsby-plugin-offline',
  ],
}
