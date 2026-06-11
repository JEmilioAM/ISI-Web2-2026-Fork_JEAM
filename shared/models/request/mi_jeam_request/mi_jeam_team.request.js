export default class TeamRequest {
    teamId = 0;
    userId = 0;
    display =  "";
    email = "";
    role = "";
    joinedAt = "";

    constructor(teamId, userId, display, email, role, joinedAt) {
        this.teamId = teamId; 
        this.userId = userId, 
        this.display = display; 
        this.email = email;
        this.role = role;
        this.joinedAt = joinedAt;

    }

    toJson() {
        return {
            teamId: this.teamId,
            userId: this.userId,
            display: this.display, 
            email: this.email, 
            role: this.role,
            joinedAt: this.joinedAt
            
        };
    }
}