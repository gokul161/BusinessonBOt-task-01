const Pool=require('pg').Pool;

const poolConfig = process.env.DATABASE_URL ? {
    connectionString: process.env.DATABASE_URL,
    ssl: {
        rejectUnauthorized: false
    }
} : {
    user: 'postgres',
    password: 'qwerty',
    host: 'localhost',
    port: '5432',
    database: 'postgres'
}

const pool = new Pool(poolConfig);

module.exports=pool;