export default class Event {
  constructor(title, description, id = null) {
    this.title = title;
    this.description = description;
    this.id = id;
  }
}
