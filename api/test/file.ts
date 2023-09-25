// import { HttpStatus } from '@nestjs/common';
// import { expect } from 'chai';
// import { before } from 'mocha';
// import { data } from './data';
// import { File, , Office } from './modules';

// describe('File', function () {
//   before(async function () {
//     this.timeout(0);
//   });

//   describe('Create a File', function () {
//     it('Should create a file', async function () {

//     });
//     it('Should NOT create a File with wrong url', async function () {
//       try {

//       } catch (e) {
//       }
//     });
//     it('Should NOT create a File with wrong onModel', async function () {
//       try {

//       } catch (e) {
//         expect(e.response?.status).to.equal(HttpStatus.BAD_REQUEST);
//       }
//     });
//   });
//   it('Should NOT create a File with wrong type', async function () {
//     try {
//       const createOffice = await Office.createOffice(adminAuth.token, data.offices[0]);
//       data.files[0].resource = createOffice.id;
//       const testFile = await File.createFile(adminAuth.token, data.files[3]);
//       expect(testFile).not.exist;
//     } catch (e) {
//       expect(e.response?.status).to.equal(HttpStatus.BAD_REQUEST);
//     }
//   });
// });
