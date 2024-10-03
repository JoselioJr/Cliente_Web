let alunos = ['João', 'Maria', 'Roberto', 'Robson', 'Michel', 'Myckael'];

document.writeln('<h1>Usando o "in"</h1>');

for (const i in alunos){  
    document.write('<p>Valor do indíce: '+i+'</p>');
    document.write('<p>Aluno: '+alunos[i]+'</p>');
}

document.writeln('<h1>Usando o "of"</h1>');
for (const aluno of alunos){
    document.write('<p>Aluno: '+aluno+'</p>');
}