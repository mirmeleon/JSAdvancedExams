let expect = require('chai').expect;
let jsdom = require('jsdom-global')();
let $ = require('jquery');
let list = require('../add-delete').list;

describe('add-delete test', () => {
    describe('add tests', () => {
        it('should add item on the end of array', () => {
            //arrange
            list.add(1);

            //act
           let actual = (`list = [${list}]`);
            //assert
          expect(actual).to.be.equal(`list = [${1}]`);
        });

        it('should add 2 items in the end of array when given 2 items', () =>{
           //arrange
            list.delete(0);
            list.add(2);
            list.add(3);
            //act
            let actual = `list = [${list}]`;
            //assert
            expect(actual).to.be.equal(`list = [${2}, ${3}]`);

        });
    });

    describe('delete functionality', ()=>{
        it('should return undefined if index is null', () =>{

            expect(list.delete(null)).to.be.undefined;
        });

        it('should return undefined if index is negative', () => {

            expect(list.delete(-2)).to.be.undefined;
        });

        it('should return undefined if index is double', () => {

            expect(list.delete(2.3)).to.be.undefined;
        });

        it('should return undefined if index is string', () => {

            expect(list.delete('deni')).to.be.undefined;
        });

        it('should return undefined if index is bigget then array length', () => {

            expect(list.delete(10)).to.be.undefined;
        });


        it('should delete first number in array with 0 index', () => {
          list.add(1);
          list.add(2);

            expect(list.delete(0)).to.be.equal(1);
        });
        it('should have 1 number in array after deleting  0 index', () => {
           list.add(1);
            list.add(2);
               //arrange
            list.delete(0);
            //act
            expect(`list = [${list}]`).to.be.equal(`list = [${2}]`);
        });

    });

    describe('string functionality test', () => {

       it('should return to string with , ', () =>{
          //arrange
           list.add(1);
           list.add(2);
           //act
          let actual = list.toString();
           //assert
           expect(actual).to.be.equal('1, 2');
       });

    });

});