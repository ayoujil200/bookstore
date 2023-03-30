export default class Book {
    id!: number;
    description!: string;
    author!: string;
    title!: string;
    categories!: string;

    constructor(id: number, description: string, title: string, categories: string) {
        this.id = id;
        this.description = description;
        this.description = description;
        this.title = title;
        this.categories = categories;
    }
}