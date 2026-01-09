import { MongoClient } from 'mongodb'

const url = process.env.MONGODB_URI!
let connectDB: Promise<MongoClient>

if (process.env.NODE_ENV === 'development') { // 개발환경일 때
  if (!global._mongo) {
    global._mongo = new MongoClient(url).connect()
  }
  connectDB = global._mongo
} else { // 배포 환경일 때
  connectDB = new MongoClient(url).connect()
}

export { connectDB }
