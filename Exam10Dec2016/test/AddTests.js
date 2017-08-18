let expect = require('chai').expect;

let makeList = require('../02.AddLeft'); //let makeList = require('../02.AddLeft').makeList;

describe('global tests', () => {
    let myList = {};
    beforeEach(function () {
        myList = makeList();
    });
   describe('myList  should have these funcs', () => {
      it('myList should have addLeft', () => {

       expect(myList.addLeft).to.exist;
       });

      it('should have addRight', () => {

          expect(myList.addRight).to.exist;
      });

      it('should have clear', () => {
         expect(myList.clear).to.exist;

      });

       it('should have toString', () => {
           expect(myList.toString).to.exist;

       });

   });

   describe('empty functionality', () => {
      it('should be empty []', () => {

         expect(myList.toString()).to.be.equal("");
      })

   });

    describe('addLeft functionality', () => {
        it('should add 1 element infront', () => {
           myList.addLeft(1);
            expect(myList.toString()).to.be.equal('1');
        });

        it('should add 1 element infront', () => {
            myList.addLeft(1);
            myList.addLeft(2);
            expect(myList.toString()).to.be.equal('2, 1');
        });

        it('should add 1 element infront', () => {
            myList.addLeft(1);
            myList.addLeft(2);
            myList.addLeft('deni');
            expect(myList.toString()).to.be.equal('deni, 2, 1');
        });

        it('should add 1 element infront', () => {
            myList.addLeft(1);
            myList.addLeft(2);
            myList.addLeft(undefined);
            expect(myList.toString()).to.be.equal(', 2, 1');
        });

    });

    describe('addRight functionality', () => {
        it('should add 1 el nakraia', () => {
            myList.addRight(1);

            expect(myList.toString()).to.be.equal('1');

        });

        it('should add 2 el nakraia', () => {
            myList.addRight(1);
            myList.addRight(2);

            expect(myList.toString()).to.be.equal('1, 2');
        });

        it('should add 3 el nakraia sus string', () => {
            myList.addRight(1);
            myList.addRight(2);
            myList.addRight('deni');

            expect(myList.toString()).to.be.equal('1, 2, deni');
        });

        it('should add 2 elements on right and 1 on left', ()=>{

            myList.addRight(1);
            myList.addRight(2);
            myList.addLeft('deni');
            expect(myList.toString()).to.be.equal('deni, 1, 2');
            });


    });

    describe('clear functionality tests', () => {
       it('with addleft then clear should clear all the list', () => {
          myList.addLeft(1);
           myList.addLeft(2);
           myList.clear();
           expect(myList.toString()).to.be.equal("");

       });

        it('with addRight then clear should clear all the list', () => {
            myList.addRight(1);
            myList.addRight(2);
            myList.clear();
            expect(myList.toString()).to.be.equal("");

        });

        it('should add 2 elements on right and one clear and 1 on left ', ()=>{

            myList.addRight(1);
            myList.addRight(2);
            myList.clear();
            myList.addLeft('deni');
            expect(myList.toString()).to.be.equal('deni');
        });

        it('with empty arr then clear should return ""', () => {

            myList.clear();
            expect(myList.toString()).to.be.equal("");

        });

    });

});

