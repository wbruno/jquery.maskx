/**
 * @file test.js
 * @author William Bruno <wbrunom@gmail.com>
 * @date 2013-03-25
 */
 describe("jQuery.mask", function() {
	var mask = jQuery.fn.mask;

	describe("mask credit card", function() {
		it("should be equal", function() {
			expect(mask.cc('1234123412341234')).toEqual('1234 1234 1234 1234');
		});
	});


	describe("mask cep", function() {
		it("should be equal", function() {
			expect(mask.cep('12345678')).toEqual('12345-678');
		});
		it("should be equal", function() {
			expect(mask.cep('abcdefgh')).toEqual('');
		});
	});


	describe("mask cnpj", function() {
		it("should be equal", function() {
			expect(mask.cnpj('11444777000161')).toEqual('11.444.777/0001-61');
		});
	});


	describe("mask cpf", function() {
		it("should be equal", function() {
			expect(mask.cpf('36097573880')).toEqual('360.975.738-80');
		});
	});


	describe("mask dateBR", function() {
		it("should be equal", function() {
			expect(mask.dateBR('25032013')).toEqual('25/03/2013');
		});
	});


	describe("mask hour", function() {
		it("should be equal", function() {
			expect(mask.hour('1223')).toEqual('12h23');
		});
	});


	describe("mask money", function() {
		it("should be equal", function() {
			expect(mask.money('1234')).toEqual('12,34');
		});
		it("should be equal", function() {
			expect(mask.money('12345')).toEqual('123,45');
		});
		it("should be equal", function() {
			expect(mask.money('1.234,56')).toEqual('1.234,56');
		});
		it("should be equal", function() {
			expect(mask.money('123456789')).toEqual('1.234.567,89');
		});
	});


	describe("mask phone", function() {
		it("should be equal", function() {
			expect(mask.phone('1112345678')).toEqual('(11) 1234-5678');
		});
		it("should be equal", function() {
			expect(mask.phone('11123456789')).toEqual('(11) 1234-56789');
		});
	});


	describe("mask rg", function() {
		it("should be equal", function() {
			expect(mask.rg('123456789')).toEqual('12.345.678-9');
		});
	});


	describe("mask time", function() {
		it("should be equal", function() {
			expect(mask.time('122745')).toEqual('1:22.745');
		});
	});
});