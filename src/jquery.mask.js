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

	var plugin = function(settings) {
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
	jQuery.fn.mask = plugin;

	plugin.defaults = {
		mask: '',
		classEmpty: 'is-empty'
	};
	plugin.cc = function(v) {
		v = v.replace(/\D/g, "");
		v = v.replace(/^(\d{4})(\d)/g, "$1 $2");
		v = v.replace(/^(\d{4})\s(\d{4})(\d)/g, "$1 $2 $3");
		v = v.replace(/^(\d{4})\s(\d{4})\s(\d{4})(\d)/g, "$1 $2 $3 $4");
		return v;
	};
	plugin.cep = function(v){
		v = v.replace(/\D/g,"");
		v = v.replace(/^(\d{5})(\d)/, "$1-$2");
		return v;
	};
	plugin.cnpj = function(v){
		v = v.replace(/\D/g, "");
		v = v.replace(/^(\d{2})(\d)/, "$1.$2");
		v = v.replace(/^(\d{2})\.(\d{3})(\d)/, "$1.$2.$3");
		v = v.replace(/\.(\d{3})(\d)/, ".$1/$2");
		v = v.replace(/(\d{4})(\d)/, "$1-$2");
		return v;
	};
	plugin.cpf = function(v){
		v = v.replace(/\D/g, "");
		v = v.replace(/(\d{3})(\d)/, "$1.$2");
		v = v.replace(/(\d{3})(\d)/, "$1.$2");
		v = v.replace(/(\d{3})(\d{1,2})$/, "$1-$2");
		return v;
	};
	plugin.dateBR = function(v){
		v = v.replace(/\D/g, "");
		v = v.replace(/(\d{2})(\d)/, "$1/$2");
		v = v.replace(/(\d{2})(\d)/, "$1/$2");
		v = v.replace(/(\d{2})(\d{2})$/, "$1$2");
		return v;
	};
	plugin.hour = function(v){
		v = v.replace(/\D/g, "");
		v = v.replace(/(\d{2})(\d)/, "$1h$2");
		return v;
	};
	plugin.money = function(v){
		v = v.replace(/\D/g, "");
		v = v.replace(/(\d)(\d{8})$/, "$1.$2");
		v = v.replace(/(\d)(\d{5})$/, "$1.$2");
		v = v.replace(/(\d)(\d{2})$/, "$1,$2");
		return v;
	};
	plugin.phone = function(v){
		v = v.replace(/\D/g, "");
		v = v.replace(/^(\d\d)(\d)/g, "($1) $2");
		v = v.replace(/(\d{4})(\d)/, "$1-$2");
		return v;
	};
	plugin.rg = function(v){
		v = v.replace(/\D/g, "");
		v = v.replace(/(\d)(\d{7})$/, "$1.$2");
		v = v.replace(/(\d)(\d{4})$/, "$1.$2");
		v = v.replace(/(\d)(\d)$/, "$1-$2");
		return v;
	};
	plugin.time = function(v){
		v = v.replace(/\D/g, "");
		v = v.replace(/(\d{1})(\d{2})(\d{2})/, "$1:$2.$3");
		return v;
	};
})();