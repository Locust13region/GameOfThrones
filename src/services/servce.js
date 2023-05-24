export default class InfService {
	constructor() {
		this._apiBase = "https://anapioficeandfire.com/api";
		this.scoupChars = "?page=4&pageSize=10"
		this.scoupHouses = "?page=2&pageSize=10"
		this.scoupBooks = "?page=1&pageSize=10"
	}

	_getRequest = async (resource, element) => {
		try {
			const promise = await fetch(`${this._apiBase}/${resource}/${element}`);
			if (!promise.ok) {
				throw new Error(`Can't fetch from resource: ${resource}`);
			}
			return await promise.json();
		} catch (e) {
			console.log(e);
			throw e;
		}
	};
	getCharacter = (charID) => {
		return this._getRequest("characters", charID).then((response) => {
			return this._transformChar(response);
		});
	};
	getCharacters = () => {
		return this._getRequest("characters", this.scoupChars).then((response) => {
			return response.map(item => {
				return this._transformChar(item);
			})
		});
	};
	getHouse = (houseID) => {
		return this._getRequest("houses", houseID).then((response) => {
			return this._transformHouse(response);
		});
	};
	getHouses = () => {
		return this._getRequest("houses", this.scoupHouses).then((response) => {
			return response.map(item => {
				return this._transformHouse(item);
			})
		});
	};
	getBook = (bookID) => {
		return this._getRequest("books", bookID).then((response) => {
			return this._transformBook(response);
		});
	};
	getBooks = () => {
		return this._getRequest("books", this.scoupBooks).then((response) => {
			return response.map(item => {
				return this._transformBook(item);
			})
		});
	};

	_transformChar = (data) => {
		return {
			id: parseInt(data.url.match(/\d+/)),
			name: data.name ? data.name : "no data",
			gender: data.gender ? data.gender : "no data",
			born: data.born ? data.born : "no data",
			died: data.died ? data.died : "no data",
			culture: data.culture ? data.culture : "no data",
		};
	};
	_transformHouse = (data) => {
		return {
			id: parseInt(data.url.match(/\d+/)),
			name: data.name ? data.name : "no data",
			region: data.region ? data.region : "no data",
			words: data.words ? data.words : "no data",
			titles: data.titles[0] ? data.titles : "no data",
			overlord: data.overlord ? data.overlord : "no data",
			ancestralWeapons: data.ancestralWeapons[0]
				? data.ancestralWeapons
				: "no data",
		};
	};
	_transformBook = (data) => {
		return {
			id: parseInt(data.url.match(/\d+/)),
			name: data.name ? data.name : "no data",
			numberOfPages: data.numberOfPages
				? data.numberOfPages
				: "no data",
			publiser: data.publiser ? data.publiser : "no data",
			released: data.released ? data.released : "no data",
		};
	};


}
