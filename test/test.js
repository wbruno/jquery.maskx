/**
 * @file test.js
 * @author William Bruno <wbrunom@gmail.com>
 * @date 2013-03-25
 */
 describe("jQuery.maskx", function() {
	var maskx = jQuery.fn.maskx;

	describe("maskx credit card", function() {
		it("should be equal", function() {
			expect(maskx.cc('1234123412341234')).toEqual('1234 1234 1234 1234');
		});
	});


	describe("maskx cep", function() {
		it("should be equal", function() {
			expect(maskx.cep('12345678')).toEqual('12345-678');
		});
		it("should be equal", function() {
			expect(maskx.cep('abcdefgh')).toEqual('');
		});
	});


	describe("maskx cnpj", function() {
		it("should be equal", function() {
			expect(maskx.cnpj('11444777000161')).toEqual('11.444.777/0001-61');
		});
	});


	describe("maskx cpf", function() {
		it("should be equal", function() {
			expect(maskx.cpf('36097573880')).toEqual('360.975.738-80');
		});
	});


	describe("maskx dateBR", function() {
		it("should be equal", function() {
			expect(maskx.dateBR('25032013')).toEqual('25/03/2013');
		});
	});


	describe("maskx hour", function() {
		it("should be equal", function() {
			expect(maskx.hour('1223')).toEqual('12h23');
		});
	});


	describe("maskx money", function() {
		it("should be equal", function() {
			expect(maskx.money('1234')).toEqual('12,34');
		});
		it("should be equal", function() {
			expect(maskx.money('12345')).toEqual('123,45');
		});
		it("should be equal", function() {
			expect(maskx.money('1.234,56')).toEqual('1.234,56');
		});
		it("should be equal", function() {
			expect(maskx.money('123456789')).toEqual('1.234.567,89');
		});
	});


	describe("maskx phone", function() {
		it("should be equal", function() {
			expect(maskx.phone('1112345678')).toEqual('(11) 1234-5678');
		});
		it("should be equal", function() {
			expect(maskx.phone('11123456789')).toEqual('(11) 1234-56789');
		});
	});


	describe("maskx rg", function() {
		it("should be equal", function() {
			expect(maskx.rg('123456789')).toEqual('12.345.678-9');
		});
	});


	describe("maskx time", function() {
		it("should be equal", function() {
			expect(maskx.time('122745')).toEqual('1:22.745');
		});
	});
});