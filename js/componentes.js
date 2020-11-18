AFRAME.registerComponent('mi_componente', {  
    schema: {
      interval: { type: 'number', default: 5000 },
      defaultColor: { type: 'color', default: '#fff' }
    },
    
    init: function() {
      var el = this.el //toma el elemento del tag
      var interval = this.data.interval //variable de intervalo, toma lo que venga de la propiedad
      
      var colors = ["yellow", "blue", "red", "green", "orange" , /*"#feadae"*/] //paleta de colores en rgb, hex, obj
      
      var i = 0
       
      el.setAttribute('color', colors[0]) //asignación del color
      
      this.colorInterval = setInterval(function(){ //cada vez que ocurra un intervalo ejecuta la funcion
        i = (i + 1) % colors.length //ciclo para recorrer el array de colores y volver al inicio
        el.setAttribute('color', colors[i])
      }, interval) 
    },
    
    update: function() {},
    //cuando se borra o se deja de utilizar
    remove: function() {
      var el = this.el
      var defaultColor = this.data.defaultColor
      
      clearInterval(this.colorInterval)
      el.setAttribute('color', defaultColor)
    }
  })
 