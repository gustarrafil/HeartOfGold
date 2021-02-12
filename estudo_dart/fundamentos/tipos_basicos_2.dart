/*
	- list
	- set
	- map
 */

main() {
	// List
	var aprovados = ['ana', 'carlos', 'daniel', 'rafael'];
	aprovados.add('daniel');
	print(aprovados);
	print(aprovados is List);
	print(aprovados[0]);
	print(aprovados.length);

	// Map
	var telefones = {
		'joao': '+55 (11) 98765-4321',
		'maria': '+55 (21) 12345-6789',
		'pedro': '+55 (85) 45455-8989',
	};
	print(telefones);
	print(telefones is Map);
	print(telefones['joao']);
	print(telefones.length);
	print(telefones.values);
	print(telefones.keys);
	print(telefones.entries);

	// Set
	var times = {'vasco', 'flamengo', 'fortaleza', 'sao paulo'};
	print(times is Set);
	times.add('palmeiras');
	times.add('palmeiras');
	print(times.length);
	print(times.contains('vasco'));
	print(times.first);
	print(times.last);
	print(times);
}
