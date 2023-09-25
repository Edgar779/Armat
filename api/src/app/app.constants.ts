const dbs = {
  DEV: 'DEV',
  TEST_H: 'TEST_H',
  TEST_E: 'TEST_E',
  PROD: 'productionv1',
};

const DB = dbs.DEV;
let connectionString = null;
if (DB === dbs.PROD) {
  connectionString = `mongodb+srv://test-armat-user:GddrNmowpbS3E4VU@cluster0.hzrxj.mongodb.net/nest-test?retryWrites=true&w=majority`;
} else {
  connectionString = `mongodb+srv://test-armat-user:GddrNmowpbS3E4VU@cluster0.hzrxj.mongodb.net/${DB}?retryWrites=true&w=majority`;
}

export const MONGO_CONN_STR = connectionString;
export const port = 4000;
