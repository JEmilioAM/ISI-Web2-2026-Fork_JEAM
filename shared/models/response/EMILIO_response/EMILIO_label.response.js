export class LabelResponse {
    constructor(id, name, color) {
        this.id = id;
        this.name = name;
        this.color = color;
    }

    static fromJson(json) {
        return new LabelResponse(json.id, json.name, json.color);
    }
}