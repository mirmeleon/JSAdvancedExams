let expect = require('chai').expect;
let jsdom = require('jsdom-global');
let $ = require('jquery');
let Sumator = require('../02.sumator.js'); //tuk e mnogo vajno da e s glavna bukva kogato e klas!



   describe('it should do something', () => {
    let myList;

    beforeEach(function () {

        myList = new Sumator();
    });

    it('should have  propertie data', () => {

        expect(myList.hasOwnProperty('data')).to.be.equal(true, 'missing data prop');

    });

       it('must initialize data to an empty array', function () {
           expect(myList.data instanceof Array).to.equal(true, 'Data must be of type array');
           expect(myList.data.length).to.equal(0, 'Data array ust be initialized empty');
       });

    it('has prop add', () => {

          expect(Sumator.prototype.hasOwnProperty('add')).to.be.equal(true, 'mising add');

       // expect(myList.add).to.exist;

        //expect(Object.getPrototypeOf(myList).hasOwnProperty('add')).to.equal(true, "Missing add function");
    });

    it('has prop sumNums', () => {

        expect(Sumator.prototype.hasOwnProperty('sumNums')).to.be.equal(true, 'mising sumNums');
       // expect(myList.sumNums).to.exist;
    });

    it('has prop removeByFilter', () => {


        expect(myList.removeByFilter).to.exist;
    });

    it('has prop toString', () => {


        expect(myList.toString).to.exist;
    });

    it('should start with empty data', () =>{
        expect(myList.data.length).to.be.equal(0);

    });

    it('adding element should return data length 1', () =>{

        myList.add(1);
        expect(myList.data.length).to.be.equal(1);

    });

    it('adding string should return data length 1', () =>{

        myList.add("deni");
        expect(myList.data.length).to.be.equal(1);

    });

    it('adding string and int should return data length 2', () =>{

        myList.add("deni");
        myList.add(2);
        expect(myList.data.length).to.be.equal(2);

    });

    it('adding string and int should return data length 2', () =>{

        myList.add("");
        expect(myList.data.length).to.be.equal(1);

    });

    it('smesena funcionalnost', () => {
        myList.add(3);
        myList.add(1);
        myList.removeByFilter(x =>x===1);
        myList.add(2);

        expect(myList.toString()).to.equal("3, 2");

    });

    it('should sum nums', () => {
        myList.add(2);
        myList.add(1);

        expect(myList.sumNums()).to.be.equal(3);

    });

    it('should sum nums', () => {
        myList.add(2);
        myList.add("deni");

        expect(myList.sumNums()).to.be.equal(2);

    });

    it('should sum nums', () => {
        myList.add("p");
        myList.add("deni");

        expect(myList.sumNums()).to.be.equal(0);

    });

    it('should remove by given filter', () => {
        myList.add(1);
        myList.add(2);
        myList.add(3);
        myList.removeByFilter(x => x%2);

        expect(myList.data).to.contains(2);

    });



    it('should return (empty)', () => {

        expect( myList.toString()).to.be.equal("(empty)");

    });

    it('should return to string with ,', () => {
        myList.add(1);
        myList.add(2);
        expect( myList.toString()).to.be.equal("1, 2");

    });

    it('should return to string with ,', () => {
        myList.add("deni");
        myList.add(2);
        expect( myList.toString()).to.be.equal("deni, 2");

    });

});