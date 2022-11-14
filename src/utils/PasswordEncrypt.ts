
import bcrypt from "bcryptjs";
import * as dotenv from 'dotenv'
dotenv.config()
export async function verifyPassword(pswdPlain: string, pswdEncrypt: string) {
	const match = await bcrypt.compare(pswdPlain, pswdEncrypt);
	return match;
}
export async function hashPassword(pswd: string) {
	const hashed = await bcrypt.hash(pswd, Number(process.env.SALT_ROUNDS));
	return hashed;
}
