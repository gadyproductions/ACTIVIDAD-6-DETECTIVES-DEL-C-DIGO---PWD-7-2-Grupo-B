# Auditoría y Refactorización de Código
**Actividad 6: Detectives del Código**

**Materia:** Proyecto de Implementación de Sitios Web Dinámicos  
**Alumno:** Gadiel Siles  
**Curso:** 7° 2°  
**Profesor:** Mansilla Muñoz York Elias

# Introducción
Refactorización de un generador de contraseñas para aplicar principios de **Clean Code** y mejorar la seguridad del sistema mediante validaciones estrictas y feedback visual.

# Código Original
```javascript
function g(l, s) {
 let c = "abc...123";
 if(s) c += "!@#";
 let p = "";
 for(let i=0; i<l; i++) {
 p += c.charAt(Math.floor(Math.random()*c.length));
 }
 return p;
}
```
# Problemas Detectados
Variables sin significado descriptivo (g, l, s, c, p).

Falta de límites en la entrada de datos (el usuario podía pedir largos infinitos).

Ausencia de validación de seguridad.

Estética no profesional.

# Mejoras Aplicadas
Refactorización Completa: Nombres descriptivos y modularización de funciones.

Control de Entropía: Implementación de un medidor de fuerza basado en longitud y variedad de caracteres.

Escudo de Entrada: Bloqueo en tiempo real (evento input) para impedir más de 48 caracteres.

