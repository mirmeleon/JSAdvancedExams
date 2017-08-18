
let expect = require('chai').expect;
let jsdom = require('jsdom-global');
let $ = require('jquery');
let SortedList = require('../02.Random.js');



describe('global tests', () => {
    let myList;
    beforeEach(function(){
        myList = new SortedList();

    });

    describe('test for properties', () => {
        it('should retun true for add', () => {
            expect(SortedList.prototype.hasOwnProperty('add')).to.be.equal(true);

        });

        it('should retun true for remove', () => {
            expect(SortedList.prototype.hasOwnProperty('remove')).to.be.equal(true);

        });

        it('should retun true for get', () => {
            expect(SortedList.prototype.hasOwnProperty('get')).to.be.equal(true);

        });

        it('should retun true for vrfyRange', () => {
            expect(SortedList.prototype.hasOwnProperty('vrfyRange')).to.be.equal(true);

        });

        it('should retun true for sort', () => {
            expect(SortedList.prototype.hasOwnProperty('sort')).to.be.equal(true);

        });

        it('should retun true for size', () => {
            expect(SortedList.prototype.hasOwnProperty('size')).to.be.equal(true);

        });

    });

    describe('when created should return empty list', () => {

        it('should return empty list', () => {
            //arrange
            let expected = [];
            //act
            //  let actual = new SortedList();

            //assert
            expect(myList.list.length).to.be.equal(0);
        });


    });

    describe('add functionality test', () => {
        it('add 1 el should return array with 1 element', () => {

            //arrange

            //act
            myList.add(1);
            //assert
            expect(myList.list.join(', ')).to.be.equal('1');
        });

        it('add 2 els should return array with 2 element', () => {

            //arrange
            myList.add(1);

            myList.add(2);
            //act
            //assert
            expect(myList.list.join(', ')).to.be.equal('1, 2');
        });

        it('add 3 els should return sorted elements', () => {

            //arrange
            myList.add(1);
            myList.add(4);
            myList.add(2);
            //act
            //assert
            expect(myList.list.join(', ')).to.be.equal('1, 2, 4');
        });

    });

    describe('remove functionality tests', () => {
        it('should remove 1 element with given correct index', () => {

            myList.add(1);
            myList.add(2);
            myList.remove(0);
            expect(myList.list.join(', ')).to.be.equal('2');
        });

        it('should be empty if we remove last element with given correct index', () => {

            myList.add(1);
            myList.remove(0);
            expect(myList.list.join(', ')).to.be.equal('');
        });

        it('should remove 2 elements with given correct 2 indexes', () => {

            myList.add('deni');
            myList.add('mishko');
            myList.remove(1);
            myList.remove(0);
            expect(myList.list.join(', ')).to.be.equal('');
        });

    });

    describe('get functionality', () => {

        it('get index should return correct element', () => {
            myList.add('deni');
            myList.add('mishko');
            expect(myList.get(1)).to.be.equal('mishko');
        });

        // it('get index should return 0 if list is empty', () => {
        //
        //     expect(myList.get(0)).to.be.equal);
        // });
    });

    describe('vrfy functionality', () => {
        it('should throw Error with msg col is emty is len =0', () => {

            expect(() => myList.remove()).throw(Error, 'Collection is empty');

        });

        it('should throw Error with msg Index was outside when index < 0', () => {
            myList.add(2);
            expect(() => myList.get(-1)).throw(Error, 'Index was outside the bounds of the collection.');

        });

        it('should throw Error with msg Index was outside when index > array.length', () => {
            myList.add(2);
            expect(() => myList.get(3)).throw(Error, 'Index was outside the bounds of the collection.');

        });

        it('should throw Error with msg Index was outside when index = array.length', () => {
            myList.add(2);
            expect(() => myList.get(1)).throw(Error, 'Index was outside the bounds of the collection.');

        });
    });

    describe('sort functionality tests', () => { //tva go testvah
        it('should return sorted arr', () =>{
            myList.add(4);
            myList.add(2);
            myList.add(7);
            myList.sort();
            expect(myList.list.join(', ')).to.be.equal('2, 4, 7');

        });

    });

    describe('size functionality tests', () => {
        it('should return size = 2 when 2 elements are added', () =>{
            myList.add(1);
            myList.add(2);

            expect(myList.size).to.be.equal(2);

        });

        it('should return size = 1 when 1 elements are added', () =>{
            myList.add(1);


            expect(myList.size).to.be.equal(1);

        });

        it('should return size = 0 when 0 elements are added', () =>{

            expect(myList.size).to.be.equal(0);

        });

    });


} );