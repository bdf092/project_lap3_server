

class User {
    constructor({id, username, email, password}) {
        this.id = id,
        this.username = username,
        this.email = email,
        this.password = password
    }

    static async getById(id) {
        const response = await db.query("SELECT * FROM users WHERE id = $1", [id]);
        if (response.rows.length != 1) {
            throw new Error("Unable to locate user.");
        }
        return new User(response.rows[0]);
    }

    static async getByUsername(username) {
        const response = await db.query("SELECT * FROM users WHERE username = $1", [username]);
        if (response.rows.length != 1) {
            throw new Error("Unable to locate user.");
        }
        return new User(response.rows[0]);
    }

    static async getByEmail(email) {
        const response = await db.query("SELECT * FROM users WHERE email = $1", [email]);
        if (response.rows.length != 1) {
            throw new Error("Unable to locate user.");
        }
        return new User(response.rows[0]);
    }


    static async create(data) {
        const { username, email, password } = data;
        let response = await db.query("INSERT INTO users (username, email, password) VALUES ($1, $2, $3) RETURNING id;",
            [username, email, password]);
        const newId = response.rows[0].id;
        const newUser = await User.getById(newId);
        return newUser;
    }
}

module.exports = User;