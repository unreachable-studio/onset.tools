import React from 'react';
import { Container, Grid } from '@material-ui/core/';

import PackageItem from './PackageItem';

const Packages = () => {
	const packages = [
		{ id: 1, name: "First package",  date: "01/02/2003", author: "Thalos",    views: 1337, downloads: 256, short_description: "The very first package.", long_description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse facilisis vel nisl in feugiat. Integer hendrerit felis sollicitudin eros feugiat, ac efficitur dui luctus. Morbi pellentesque risus eu hendrerit tincidunt. Sed tempus dolor at finibus commodo. Integer mi est, gravida quis enim ac, vehicula dignissim urna. Duis aliquet, neque eu rhoncus egestas, mi lectus varius eros, eget luctus libero velit imperdiet sem. Praesent fermentum, metus vel iaculis eleifend, lorem turpis auctor metus, rutrum porttitor mi purus vel massa. Nulla facilisi. Duis euismod massa arcu, vel fermentum sem vulputate ac. Maecenas imperdiet tincidunt congue. Pellentesque sit amet congue nulla. Vestibulum ut dignissim lectus. Duis id mollis leo." },
		{ id: 2, name: "Second package", date: "04/05/2006", author: "Digital",   views: 42,   downloads: 21,  short_description: "A second package.",       long_description: "Pellentesque sodales, nisi lobortis lacinia rhoncus, lacus purus sagittis dui, eu laoreet orci orci quis lectus. Aenean condimentum erat vitae est elementum scelerisque. Aliquam fermentum accumsan neque a eleifend. Fusce dignissim enim sed quam consectetur, venenatis auctor massa interdum. Proin consequat ipsum metus, sed fringilla est vehicula a. Nullam tempus nibh libero, sagittis pharetra libero semper sit amet. Phasellus consequat aliquam magna eget volutpat. Sed eleifend, velit vitae euismod eleifend, metus urna suscipit lorem, vel tincidunt sapien elit id elit. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Suspendisse in nulla orci. Mauris orci sem, imperdiet et sagittis in, tempor quis libero. Etiam volutpat, ante sed consequat placerat, odio nisi convallis leo, vitae pretium tortor metus auctor lacus. Morbi sagittis sed ante suscipit pharetra." },
		{ id: 3, name: "Third package",  date: "07/08/2009", author: "JanHolger", views: 1024, downloads: 42,  short_description: "And then the third one!", long_description: "Cras ac lorem sollicitudin, sollicitudin nunc id, condimentum justo. Donec commodo sagittis ultricies. In ultricies odio quis eros vestibulum, a viverra nisl aliquet. Integer ultricies, enim nec efficitur malesuada, lectus felis porta purus, congue finibus ligula felis a orci. Morbi mollis sodales semper. Integer sit amet fringilla elit, eu cursus arcu. Integer eget felis placerat, scelerisque magna sit amet, auctor ipsum. Aliquam cursus diam sollicitudin risus pellentesque, eget porttitor nibh viverra. Etiam ut vulputate augue. Morbi efficitur vitae est ac scelerisque. Fusce id ullamcorper felis. Nam iaculis a ligula a luctus. Nullam nibh orci, iaculis in malesuada at, vestibulum eget odio. Nullam fringilla imperdiet nibh sit amet dignissim. Maecenas in nulla lectus." },
	];

	return <Container>
		<h3>Packages</h3>
		<Grid container spacing="2">
			{ packages.map((p, index) => <PackageItem package={p} />) }
		</Grid>
	</Container>
}

export default Packages;
