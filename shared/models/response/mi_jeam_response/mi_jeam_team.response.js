export class TeamResponse {
    constructor(
        teamId,
        userId,
        display,
        email,
        role,
        joinedAt,

    ) {
        this.teamId = teamId; 
        this.userId = userId, 
        this.display = display; 
        this.email = email;
        this.role = role;
        this.joinedAt = joinedAt;

    }

    static fromJson(json) {
        const model = new TeamResponse(
            json.teamId,
            json.userId,
            json.display,
            json.email,
            json.role,
            json.joinedAt
    
        )

        return model;
    }
}