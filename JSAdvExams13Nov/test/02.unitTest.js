let expect = require('chai').expect;
let createList = require('../02.AddSwap').createList;

describe('global', () => {
  let myList = {};

     beforeEach(function () {
     myList = createList();

  });

    describe('props test', () => {
        it('should have add property', () => {

            expect(myList.hasOwnProperty('add')).to.be.equal(true, 'missing add')
           //expect(myList.data).to.be.equal(0);
        });

        it('myList should have add', () => {

            expect(myList.add).to.exist;
        });

        it('should have shiftLeft', () => {
           expect(myList.hasOwnProperty('shiftLeft')).to.be.equal(true, 'missiing shiftleft')

        });

        it('should have shiftRight', () => {

            expect(myList.hasOwnProperty('shiftRight')).to.be.equal(true, 'missing shiftRight')
            //expect(myList.data).to.be.equal(0);
        });
        it('myList should have swap', () => {

            expect(myList.hasOwnProperty('swap')).to.be.equal(true, 'missing swap');
        });

        it('should have  toString', () => {
            expect(myList.hasOwnProperty('toString')).to.be.equal(true, 'missiing  toString')
          });

        it('should have  empty data', () => {
            expect(myList.toString()).to.be.equal("", 'missiing  empty data[]')
        });

    });

    describe('functionality tests', () => {
        it('should add 1 Element', () => {
            //act
            myList.add(1);

            //assert
            expect(myList.toString()).to.equal('1');
        });

        it('should add 2 Elements', () => {
            //act
            myList.add(1);
            myList.add(2);

            //assert
            expect(myList.toString()).to.equal('1, 2');
        });
    });
      describe('neshto si', () => {
        it('should add string Elements', () => {
            //act
            myList.add("deni");


            //assert
            expect(myList.toString()).to.equal('deni');
        });

        it('should shiftLeft Elements', () => {
            //act
            myList.add("deni");
            myList.add("misheto");
            myList.shiftLeft();


            //assert
            expect(myList.toString()).to.equal('misheto, deni');
        });

        it('should shiftLeft Elements', () => {
            //act
            myList.add("deni");
            myList.add("misheto");
            myList.add("korito");
            myList.shiftLeft();
            myList.shiftLeft();


            //assert
            expect(myList.toString()).to.equal('korito, deni, misheto');
        });

        it('should do nothing if elements are empty', () => {
            //act

            myList.shiftLeft();


            //assert
            expect(myList.toString()).to.equal('');
        });

        it('should do nothing if elements are 1', () => {
            //act
            myList.add(1);
            myList.shiftLeft();


            //assert
            expect(myList.toString()).to.equal('1');
        });

        it('should shiftRight Elements', () => {
            //act
            myList.add("deni");
            myList.add("misheto");
            myList.shiftRight();


            //assert
            expect(myList.toString()).to.equal('misheto, deni');
        });

        it('should shiftRight Elements', () => {
            //act
            myList.add("deni");
            myList.add("misheto");
            myList.add("kori");
            myList.shiftRight();
            myList.shiftRight();


            //assert
            expect(myList.toString()).to.equal('misheto, kori, deni');
        });

        it('should do nothing if els are 0', () => {
            myList.shiftRight();

            expect(myList.toString()).to.equal('');

        });

        it('should do nothing if els are 1', () => {
            myList.add("deni");
            myList.shiftRight();

            expect(myList.toString()).to.equal('deni');

        });

        //swap tests
        it('should return false with swap with 2 equal indexes', () => {
            myList.add("deni");
            myList.add("toni");

            expect(myList.swap(1,1)).to.equal(false, 'cant accept 2 eual indexes');

        });

        it('should return false with swap with 1 number and string', () => {
            myList.add("deni");
            myList.add("toni");

            expect(myList.swap(1,"deni")).to.equal(false, 'cant accept 2 eual indexes');

        });

        it('should return false with swap with 2 strings', () => {
            myList.add("deni");
            myList.add("toni");

            expect(myList.swap("pesho","deni")).to.equal(false, 'cant accept 2 eual indexes');

        });

        it('should return false with swap with 1 number and string', () => {
            myList.add("deni");
            myList.add("toni");

            expect(myList.swap("pesho",1)).to.equal(false, 'cant accept 1 string as index');

        });

        it('should return false with swap with negative number ', () => {
            myList.add("deni");
            myList.add("toni");

            expect(myList.swap(-1,1)).to.equal(false, 'cant accept negative as index');

        });

        it('should return false with swap with negative number ', () => {
            myList.add("deni");
            myList.add("toni");

            expect(myList.swap(1,-1)).to.equal(false, 'cant accept negative as index');

        });

        it('should return false with swap with negative number ', () => {
            myList.add("deni");
            myList.add("toni");

            expect(myList.swap(-1,-1)).to.equal(false, 'cant accept negative as index');

        });

        it('should return false with swap with index bigger then data length', () => {
            myList.add("deni");
            myList.add("toni");

            expect(myList.swap(2,1)).to.equal(false, 'cant accept negative as index');

        });

        it('should return false with swap with index bigger then data length', () => {
            myList.add("deni");
            myList.add("toni");

            expect(myList.swap(0,3)).to.equal(false, 'cant accept negative as index');

        });

        it('should return false with swap with index bigger then data length', () => {
            myList.add("deni");
            myList.add("toni");

            expect(myList.swap(4,4)).to.equal(false, 'cant accept negative as index');

        });

        it('should return false with swap with index bigger then data length', () => {
            myList.add("deni");
            myList.add("toni");

            expect(myList.swap(1,2)).to.equal(false, 'cant accept negative as index');

        });

        it('should return false with swap with index bigger then data length', () => {
            myList.add("deni");
            myList.add("toni");

            expect(myList.swap(2,1)).to.equal(false, 'cant accept negative as index');

        });

        it('should return true with swap with correct index', () => {
            myList.add("deni");
            myList.add("toni");

            expect(myList.swap(0,1)).to.equal(true, 'correct index');

        });

          it('should return true with swap with correct index', () => {
              myList.add("deni");
              myList.add("toni");
              myList.swap(0,1);

              expect(myList.toString()).to.equal('toni, deni', 'correct index');

          });

        it('should return true with swap with correct index', () => {
            myList.add("deni");
            myList.add("toni");

            expect(myList.swap(1,0)).to.equal(true, 'correct index');

        });

          it('should return true with swap with correct index', () => {
              myList.add();
              myList.add(null);


              expect(myList.toString()).to.equal(', ', 'correct index');

          });
    })

}); //end desc