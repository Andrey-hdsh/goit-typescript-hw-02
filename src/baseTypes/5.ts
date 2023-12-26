/* 
  Як ви визначите змінну в TypeScript, яка може приймати рядок або число (union type)? 
  І так само визначте змінну, яка може приймати тільки одне з двох рядкових значень: 'enable' або 'disable' (literal type)?
*/

let union : string | number;
let literal : 'enable' | 'disable';

union = 'strimg';
union = 200;

literal = 'enable';
literal = 'disable';