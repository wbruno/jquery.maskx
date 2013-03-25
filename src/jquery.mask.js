/**
 * @file jquery.mask.js
 * @author William Bruno <wbrunom@gmail.com>
 * @date 2013-03-25
 *
 * @use jQuery('input[name="cc"]').mask({mask: 'cc'});
 */
;( function() {
	/*global jQuery: false*/
	'use strict';
	jQuery.fn.mask = function(settings) {
		var v_obj, v_fun;
		var _mascara = function(o,f) {
			v_obj = o;
			v_fun = f;
			setTimeout(_execmascara,1);
		};
		var _execmascara = function() {
			v_obj.value = v_fun(v_obj.value);
		};
		return this.each( function() {
			var $this = jQuery(this),
			opts = jQuery.extend({}, jQuery.fn.mask.defaults, settings ),
			maskFunc = jQuery.fn.mask[opts.mask];

			if(typeof maskFunc === 'function') {
				$this.on('keypress', function(){
					_mascara(this, maskFunc);
					$this.removeClass('is-empty');
				});
				$this.on('blur', function(){
					if($this.val() === '') { 
						$this.addClass('is-empty');
					}
				});
			}
		});
	};
	jQuery.fn.mask.defaults = {
		mask: '',
		classEmpty: 'is-empty'
	};
	jQuery.fn.mask.cc = function(v) {
		v = v.replace(/\D/g, "");
		v = v.replace(/^(\d{4})(\d)/g, "$1 $2");
		v = v.replace(/^(\d{4})\s(\d{4})(\d)/g, "$1 $2 $3");
		v = v.replace(/^(\d{4})\s(\d{4})\s(\d{4})(\d)/g, "$1 $2 $3 $4");
		return v;
	};
	jQuery.fn.mask.cep = function(v){
		v = v.replace(/\D/g,"");
		v = v.replace(/^(\d{5})(\d)/, "$1-$2");
		return v;
	};
	jQuery.fn.mask.cnpj = function(v){
		v = v.replace(/\D/g, "");
		v = v.replace(/^(\d{2})(\d)/, "$1.$2");
		v = v.replace(/^(\d{2})\.(\d{3})(\d)/, "$1.$2.$3");
		v = v.replace(/\.(\d{3})(\d)/, ".$1/$2");
		v = v.replace(/(\d{4})(\d)/, "$1-$2");
		return v;
	};
	jQuery.fn.mask.cpf = function(v){
		v = v.replace(/\D/g, "");
		v = v.replace(/(\d{3})(\d)/, "$1.$2");
		v = v.replace(/(\d{3})(\d)/, "$1.$2");
		v = v.replace(/(\d{3})(\d{1,2})$/, "$1-$2");
		return v;
	};
	jQuery.fn.mask.dateBR = function(v){
		v = v.replace(/\D/g, "");
		v = v.replace(/(\d{2})(\d)/, "$1/$2");
		v = v.replace(/(\d{2})(\d)/, "$1/$2");
		v = v.replace(/(\d{2})(\d{2})$/, "$1$2");
		return v;
	};
	jQuery.fn.mask.hour = function(v){
		v = v.replace(/\D/g, "");
		v = v.replace(/(\d{2})(\d)/, "$1h$2");
		return v;
	};
	jQuery.fn.mask.money = function(v){
		v = v.replace(/\D/g, "");
		v = v.replace(/(\d)(\d{8})$/, "$1.$2");
		v = v.replace(/(\d)(\d{5})$/, "$1.$2");
		v = v.replace(/(\d)(\d{2})$/, "$1,$2");
		return v;
	};
	jQuery.fn.mask.phone = function(v){
		v = v.replace(/\D/g, "");
		v = v.replace(/^(\d\d)(\d)/g, "($1) $2");
		v = v.replace(/(\d{4})(\d)/, "$1-$2");
		return v;
	};
	jQuery.fn.mask.rg = function(v){
		v = v.replace(/\D/g, "");
		v = v.replace(/(\d)(\d{7})$/, "$1.$2");
		v = v.replace(/(\d)(\d{4})$/, "$1.$2");
		v = v.replace(/(\d)(\d)$/, "$1-$2");
		return v;
	};
	jQuery.fn.mask.time = function(v){
		v = v.replace(/\D/g, "");
		v = v.replace(/(\d{1})(\d{2})(\d{2})/, "$1:$2.$3");
		return v;
	};
})();