const AWS = require('aws-sdk');

const AWS_REGION = "us-east-1";
const AWS_PROFILE = "prod";
const tableName = "student-metadata";

AWS.config.update({
  region: AWS_REGION,
  accessKeyId: 'AKIA3HXIRBXBDPR6LHVZ',
  secretAccessKey: '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',
});

const db = new AWS.DynamoDB();

const getStudentInfo = async (studentCardId) => {
  console.log('studentCardId->', studentCardId);
  const params = {
    Key: {
    "id": {
       S: studentCardId
      }
    }, 
    TableName: tableName
   };

  const result = await db.getItem(params).promise();
  console.log('result', result);
  return result.Item;
}


module.exports = {
  getStudentInfo,
}









