## Notes of MongoDB Series

## 📌 What is MongoDB?
MongoDB ek **NoSQL, document-based database** hai jo data ko **JSON-like format (BSON)** me store karta hai.  
Ye traditional SQL databases se different hota hai kyunki isme **tables, rows aur columns** nahi hote.

MongoDB ko large-scale applications ke liye design kiya gaya hai jaha **high performance, scalability aur flexibility** chahiye hoti hai.

---

## 📂 Data Structure in MongoDB
MongoDB ka data structure kuch is tarah hota hai:

- **Database** → Collection → Document
- **Collection** → Table (SQL jaisa)
- **Document** → Row (SQL jaisa)
- **Field** → Column (SQL jaisa)

Example Document:
```json
{
  "name": "Abhishek",
  "age": 22,
  "skills": ["React", "Node", "MongoDB"],
  "isActive": true
}
```

---

## Difference Between JSON and BSON (With Examples)

| Feature           | JSON                                          | BSON                                                                                              |
|-------------------|-----------------------------------------------|---------------------------------------------------------------------------------------------------|
| Full Form         | JavaScript Object Notation                    | Binary JSON                                                                                       |
| Format Type       | Text-based                                    | Binary-based                                                                                      |
| Human Readable    | Yes                                           | No                                                                                                |
| Storage           | Larger size                                   | More compact                                                                                      |
| Speed             | Slower                                        | Faster                                                                                            |
| Data Types        | String, number, boolean, array, object, null  | Extra :- Date, object id, binary data, int32, int64, double, float, timestamp, regular expression |
| Usage             | Client–Server data exchange                   | MongoDB internal storage                                                                          |
| Readability       | High                                          | Low                                                                                               |
| Performance       | Medium                                        | High                                                                                              |

### JSON Example
```json
{
  "name": "Abhishek",
  "age": 22,
  "isActive": true,
  "skills": ["React", "MongoDB"]
}
```

### BSON Example (Conceptual Representation)
```bson
{
  name: "Abhishek",
  age: Int32(22),
  isActive: Boolean(true),
  skills: ["React", "MongoDB"],
  _id: ObjectId("64f1c9b8a1c23d4e567890ab")
}
```

---

## Benefits of MongoDB

- **Schema-less Database**  
  MongoDB me fixed schema nahi hota, isliye data structure ko easily change kiya ja sakta hai.

- **High Performance**  
  BSON format aur indexing ki wajah se MongoDB fast read/write operations provide karta hai.

- **Scalability**  
  MongoDB horizontal scaling support karta hai using **sharding**, jo large applications ke liye best hai.

- **Flexible Data Model**  
  Complex data (arrays, nested objects) ko easily store aur manage kar sakte hain.

- **Easy Integration with Node.js**  
  MongoDB JavaScript-based hai, isliye MERN stack ke sath easily integrate hota hai.

- **Rich Query Language**  
  MongoDB powerful queries, filters, aggregation aur operators support karta hai.

- **Aggregation Framework**  
  Data ko transform, group aur analyze karna easy hota hai using aggregation pipeline.

- **Indexing Support**  
  Different types ke indexes available hain jo query performance improve karte hain.

- **High Availability**  
  Replica Sets ki help se automatic failover aur data redundancy milti hai.

- **Cloud Support (MongoDB Atlas)**  
  Fully managed cloud service with automatic backup, scaling aur security.

- **Open Source**  
  MongoDB open-source hai aur strong community support available hai.

- **Best for Modern Applications**  
  Real-time apps, analytics, e-commerce aur large-scale applications ke liye perfect hai.

---

## Limitations of MongoDB

- **No Fixed Schema**  
  Schema-less nature ki wajah se agar proper validation na ho to data inconsistency ho sakti hai.

- **Not Best for Complex Transactions**  
  Complex multi-table transactions (SQL jaisi) ke liye MongoDB utna suitable nahi hai.

- **Memory Consumption**  
  MongoDB zyada RAM consume karta hai, specially large datasets ke sath.

- **Join Operations Limited**  
  SQL databases jaise powerful joins available nahi hote (lookup limited hai).

- **Data Redundancy**  
  Embedded documents ki wajah se data duplication ho sakta hai.

- **Learning Curve**  
  Aggregation framework aur indexing beginners ke liye thoda complex ho sakta hai.

- **Document Size Limit**  
  Ek document ka maximum size **16MB** hota hai.

- **Consistency Issues**  
  Distributed systems me kabhi-kabhi eventual consistency ka issue aa sakta hai.

- **Not Ideal for Highly Relational Data**  
  Jaha bohot saare relations aur joins chahiye, waha SQL better hota hai.

- **Index Overhead**  
  Zyada indexes create karne se write performance slow ho sakti hai.

- **Limited Support for ACID (Earlier Versions)**  
  Pehle versions me ACID transactions limited the (modern versions me improve hua hai).

---

## Database, Collection, and Document in MongoDB

---

## 🗄 What is a Database in MongoDB?
Database MongoDB ka **top-level container** hota hai jisme data store hota hai.

- Ek database ke andar **multiple collections** ho sakti hain
- SQL me database ka kaam bhi same hota hai
- MongoDB me database **tab tak exist nahi karta** jab tak usme data na ho

### Example
```js
use myDatabase
```

## 📂 What is a Collection in MongoDB?

- Collection, database ke andar documents ka group hota hai.
- Collection SQL ke table jaisa hota hai
- Collection me fixed schema nahi hota
- Ek database me multiple collections ho sakti hain

### Example
```js
db.createCollection("users")
```

## 📄 What is a Document in MongoDB?

- Document MongoDB ka basic data unit hota hai.
- Document JSON-like format me hota hai
- Har document ke paas ek unique _id field hoti hai
- Document SQL ke row jaisa hota hai

## Example Document
```json
{
  "_id": ObjectId("64f1c9b8a1c23d4e567890ab"),
  "name": "Abhishek",
  "age": 22,
  "skills": ["React", "MongoDB"],
  "isActive": true
}
```

## 🔄 Relationship Between Database, Collection & Document

- Database ----> Collection ----> Document

## MongoDB – Create Database

### The `use` Command
MongoDB me database create ya select karne ke liye **`use DATABASE_NAME`** command ka use hota hai.  
Agar database exist nahi karta, to MongoDB naya database create kar deta hai;  
aur agar exist karta hai, to usi database par switch ho jata hai.

---

### Syntax
```js
use DATABASE_NAME
```

### Example
- Agar aap mydb naam ka database use (ya create) karna chahte ho:

```js
> use mydb
switched to db mydb
```

- Check Current Database
Currently selected database check karne ke liye db command use hoti hai:
```js
> db
mydb
```

- Show All Databases
Available databases ki list dekhne ke liye:
```js
> show dbs
local     0.78125GB
test      0.23012GB
```

- Notice karo ki mydb list me nahi dikh raha.
- Iska reason ye hai ki database empty hai.
- MongoDB me empty database ko exist nahi maana jata.

- Insert Data to Create Database
- Database ko visible banane ke liye kam se kam ek document insert karna padta hai.

```js
> db.movie.insert({ "name": "tutorials point" })
```

- Ab dobara databases check karo:

```js
> show dbs
local      0.78125GB
mydb       0.23012GB
test       0.23012GB
```

---

## MongoDB – Collection & Database Commands 

| Command                                           | Meaning (Kya karta hai)                                               | Example                                   |
|---------------------------------------------------|-----------------------------------------------------------------------|-------------------------------------------|
| `db.createCollection("collection_name")`          | Nayi collection manually create karta hai                             | `db.createCollection("users")`            |
| `show collections`                                | Current database ki saari collections show karta hai                  | `show collections`                        |
| `db.collection_name.renameCollection("new_name")` | Existing collection ka naam change karta hai                          | `db.users.renameCollection("customers")`  |
| `db.help()`                                       | Database se related saare available commands ki help dikhata hai      | `db.help()`                               |
| `db.collection_name.help()`                       | Specific collection ke methods aur operations ki help deta hai        | `db.users.help()`                         |
| `db.collection_name.drop()`                       | Collection aur uske saare documents permanently delete karta hai      | `db.users.drop()`                         |
| `db.dropDatabase()`                               | Current selected database aur uski saari collections delete karta hai | `db.dropDatabase()`                       |

---

### Important Notes
- `createCollection()` se collection manually create hoti hai
- `show collections` sirf current database ki collections dikhata hai
- `renameCollection()` old collection ka naam new naam me change karta hai
- `help()` commands beginners ke liye bohot useful hoti hain
- `drop()` aur `dropDatabase()` **irreversible** hote hain (data wapas nahi aata)

---

## MongoDB – Insert & Find Documents using mongosh

| Method            | Meaning (Kya karta hai)                                                   | Syntax                                    | Example                                                                           |
|-------------------|---------------------------------------------------------------------------|-------------------------------------------|-----------------------------------------------------------------------------------|
| `insertOne()`     | Collection me **ek single document** insert karta hai                     | `db.collection.insertOne(document)`       | `db.users.insertOne({ name: "Abhishek", age: 22 })`                               |
| `insertMany()`    | Collection me **multiple documents ek sath** insert karta hai             | `db.collection.insertMany([documents])`   | `db.users.insertMany([{ name: "Aman", age: 21 }, { name: "Rohit", age: 23 }])`    |
| `find()`          | Collection ke **saare documents ya matching documents** show karta hai    | `db.collection.find(query)`               | `db.users.find()`                                                                 |

---

### Example: insertOne()
```js
db.students.insertOne({
  name: "Abhishek",
  age: 22,
  course: "MongoDB"
})
```
- 👉 Ye command students collection me ek document add karegi.

### Example: insertMany()
```js
db.students.insertMany([
  { name: "Aman", age: 21, course: "React" },
  { name: "Rohit", age: 23, course: "Node.js" }
])
```
- 👉 Ye command students collection me multiple documents ek sath add karegi.

### Example: find()
```js
db.students.find()
```
- 👉 Ye command students collection ke saare documents show karegi.

- Find with Condition
```js
db.students.find({ age: 22 })
```
- 👉 Sirf wahi documents show honge jinka age 22 hai.

### Important Points
- Agar collection exist nahi karti, to MongoDB automatically collection create kar deta hai
- Har document ke sath ek unique _id field generate hoti hai
- insertMany() me documents array format me hote hain
- find() me empty query dene par saare documents mil jate hain

---

## MongoDB – Schema Validation

### Schema Validation
By default, MongoDB **flexible schema** follow karta hai.  
Iska matlab ye hai ki starting me **koi strict schema validation set nahi hota** aur documents alag-alag structure ke ho sakte hain.

Lekin agar hum chahen ki collection ke saare documents **same structure follow karein**, to hum **Schema Validation rules** create kar sakte hain.

---

## JSON Schema Validation in MongoDB
MongoDB **JSON Schema validation** support karta hai.  
Iske liye **`$jsonSchema` operator** ka use hota hai, jisse hum document ka structure define kar sakte hain.

---

## Example: Create Collection with Schema Validation

```js
db.createCollection("posts", {
  validator: {
    $jsonSchema: {
      bsonType: "object",
      required: ["title", "body"],
      properties: {
        title: {
          bsonType: "string",
          description: "Title of post - Required."
        },
        body: {
          bsonType: "string",
          description: "Body of post - Required."
        },
        category: {
          bsonType: "string",
          description: "Category of post - Optional."
        },
        likes: {
          bsonType: "int",
          description: "Post like count. Must be an integer - Optional."
        },
        tags: {
          bsonType: ["string"],
          description: "Must be an array of strings - Optional."
        },
        date: {
          bsonType: "date",
          description: "Must be a date - Optional."
        }
      }
    }
  }
})
```

---

## Schema Validation – Line by Line Explanation (Table)

| Part                           | Meaning                                                    |
|--------------------------------|------------------------------------------------------------|
| `db.createCollection("posts")` | `posts` naam ki nayi collection create karta hai           |
| `validator`                    | Collection ke liye validation rules define karta hai       |
| `$jsonSchema`                  | JSON Schema ka use karke document structure set karta hai  |
| `bsonType: "object"`           | Document ka type **object** hona chahiye                   |
| `required: ["title", "body"]`  | `title` aur `body` fields **mandatory** hain               |
| `properties`                   | Allowed fields aur unke validation rules define karta hai  |
| `title`                        | Post ka title field                                        |  
| `body`                         | Post ka main content field                                 |
| `category`                     | Optional category field                                    |
| `likes`                        | Likes count field (integer type)                           |
| `tags`                         | String type ka array hona chahiye                          |
| `date`                         | Date type value honi chahiye                               |
| `bsonType: "string"`           | Field ka data type **string** hona chahiye                 |
| `bsonType: "int"`              | Field ka data type **integer** hona chahiye                |
| `bsonType: "date"`             | Field ka data type **date** hona chahiye                   |

---

## MongoDB – Modify an Existing Collection’s Schema (Schema Validation)

| Command / Part      | Meaning (Kya karta hai)                                         | Example                                     |
|---------------------|-----------------------------------------------------------------|---------------------------------------------|
| `collMod`           | Existing collection ke schema/validation rules modify karta hai | `db.runCommand({ collMod: "posts", ... })`  |
| `validator`         | Naye ya updated validation rules define karta hai               | `validator: { $jsonSchema: { ... } }`       |
| `$jsonSchema`       | JSON Schema ke through document structure set karta hai         | `$jsonSchema: { bsonType: "object" }`       |
| `validationLevel`   | Validation kab apply hogi decide karta hai                      | `"strict"` / `"moderate"`                   |
| `validationAction`  | Invalid data par action define karta hai                        | `"error"` / `"warn"`                        |

---

### Example: Modify Existing Collection Schema

```js
db.runCommand({
  collMod: "posts",
  validator: {
    $jsonSchema: {
      bsonType: "object",
      required: ["title", "body", "author"],
      properties: {
        title: {
          bsonType: "string",
          description: "Post title - Required"
        },
        body: {
          bsonType: "string",
          description: "Post body - Required"
        },
        author: {
          bsonType: "string",
          description: "Author name - Required"
        },
        likes: {
          bsonType: "int",
          minimum: 0,
          description: "Likes count - Optional"
        }
      }
    }
  },
  validationLevel: "strict",
  validationAction: "error"
})
```

---

## MongoDB – Update Documents (updateOne & updateMany)

| Method | Meaning (Kya karta hai) | Syntax | Example |
|------|--------------------------|--------|---------|
| `updateOne()` | Collection me **sirf ek matching document** update karta hai | `db.collection.updateOne(filter, update, options)` | `db.users.updateOne({ name: "Abhishek" }, { $set: { age: 23 } })` |
| `updateMany()` | Collection me **saare matching documents** update karta hai | `db.collection.updateMany(filter, update, options)` | `db.users.updateMany({ isActive: true }, { $set: { status: "active" } })` |

---

### Example: updateOne()
```js
db.students.updateOne(
  { name: "Abhishek" },
  { $set: { age: 23 } }
)
```
👉 Ye command students collection me sirf pehla matching document update karegi.

### Example: updateMany()
```js
db.students.updateMany(
  { course: "MongoDB" },
  { $set: { duration: "1 Month" } }
)
```
👉 Ye command students collection ke saare matching documents update karegi.

## Common Update Operators

| Operator        | Use (Kya karta hai)                               |
|-----------------|---------------------------------------------------|
| `$set`          | Field ki value set ya update karta hai            |
| `$unset`        | Document se field remove karta hai                |
| `$inc`          | Number value ko increment ya decrement karta hai  |
| `$push`         | Array ke andar new value add karta hai            |
| `$pull`         | Array se specific value remove karta hai          |
| `$pushAll`      | Array me multiple values add karta hai            |
| `$pop`          | Array se first ya last element remove karta hai   |
| `$mul`          | Number value ko multiply karta hai                |
| `$rename`       | Existing field ka naam change karta hai           |
| `$currentDate`  | Current date/time set karta hai                   |

---

## MongoDB – Replace Command (replaceOne)

### What is Replace Command?
MongoDB me **Replace command** ka use tab hota hai jab hume **poora document replace** karna ho.  
Isme existing document ke saare fields remove ho jaate hain aur unki jagah **naya document** aa jata hai.

⚠️ Important:  
`replaceOne()` me **update operators (`$set`, `$inc`, etc.) use nahi hote**.

---

### Syntax
```js
db.collection.replaceOne(filter, replacement, options)
```

## Example
```js
db.students.replaceOne(
  { name: "Abhishek" },
  {
    name: "Abhishek Jain",
    age: 23,
    course: "MongoDB",
    city: "Jaipur"
  }
)
```
👉 Is example me:
- name: "Abhishek" wala document search hoga
- Uska poora document replace ho jayega
- Sirf _id field automatically same rehti hai

---

## MongoDB – Delete Commands (deleteOne & deleteMany)

### What is Delete Command?
MongoDB me **Delete command** ka use collection se **documents remove (delete)** karne ke liye hota hai.  
Ye command **permanently data delete** karti hai (undo possible nahi hota).

---

## Delete Methods Overview (Table)

| Method          | Meaning (Kya karta hai)                         | Syntax                              | Example                                     |
|-----------------|-------------------------------------------------|-------------------------------------|---------------------------------------------|
| `deleteOne()`   | **Sirf ek matching document** delete karta hai  | `db.collection.deleteOne(filter)`   | `db.users.deleteOne({ name: "Abhishek" })`  |
| `deleteMany()`  | **Saare matching documents** delete karta hai   | `db.collection.deleteMany(filter)`  | `db.users.deleteMany({ isActive: false })`  |

---

## Example: deleteOne()
```js
db.students.deleteOne({ name: "Abhishek" })
```
👉 Ye command students collection me se sirf ek document delete karegi jiska name match karta hai.

## Example: deleteMany()
```js
db.students.deleteMany({ course: "MongoDB" })
```
👉 Ye command students collection ke saare documents delete karegi jinka course "MongoDB" hai.

## Delete All Documents (Collection Empty)
```js
db.students.deleteMany({})
```
👉 Isse collection ke saare documents delete ho jate hain, lekin collection khud exist karti rehti hai.

---

## Important Points – Delete Commands

| Point                 | Explanation                                                                     |
|-----------------------|---------------------------------------------------------------------------------|
| Permanent Delete      | Delete command ke baad data **recover nahi hota**                               |
| Filter Mandatory      | Bina condition ke delete karna **risky** hota hai                               |
| Empty Filter `{}`     | `{}` use karne se **saara data delete** ho jata hai                             |
| Collection Remains    | `deleteMany({})` se collection **delete nahi hoti**, sirf data delete hota hai  |
| Difference from Drop  | `drop()` poori collection ko delete karta hai                                   |

---

## Delete vs Drop (Difference Table)

| Delete                        | Drop                                      |
|-------------------------------|-------------------------------------------|
| Documents delete karta hai    | Collection delete karta hai               |
| Collection exist karti hai    | Collection completely remove ho jati hai  |
| Specific data remove hota hai | Saara data + structure delete hota hai    |

---

## Best Practices

| Practice      | Explanation                                                         |
|---------------|---------------------------------------------------------------------|
| Verify Data   | Delete se pehle `find()` se data verify karein                      |
| Use Carefully | Production environment me delete commands **carefully** use karein  |
| Take Backup   | Delete se pehle **backup** hona chahiye                             |

---

## MongoDB – Find Commands (Read Operations)

---

## Find Methods Overview (Table)

| Method      | Meaning (Kya karta hai)                                       | Syntax                          | Example                         |
|-------------|---------------------------------------------------------------|---------------------------------|---------------------------------|
| `find()`    | Collection ke **saare ya matching documents** show karta hai  | `db.collection.find(query)`     | `db.users.find()`               |
| `findOne()` | **Sirf ek matching document** return karta hai                | `db.collection.findOne(query)`  | `db.users.findOne({ age: 22 })` |

---

## find()
```js
db.students.find()
```
👉 students collection ke saare documents show karta hai.

## find with Condition
```js
db.students.find({ course: "MongoDB" })
```
👉 Sirf wahi documents show honge jinka course MongoDB hai.

## findOne()
```js
db.students.findOne({ name: "Abhishek" })
```
👉 Sirf pehla matching document return karega.

## Find with Projection (Select Specific Fields)
Projection ka matlab hota hai sirf required fields dikhana.
```js
db.students.find(
  { course: "MongoDB" },
  { name: 1, age: 1, _id: 0 }
)
```

## Projection using `.projection()` Method

### Basic Syntax
```js
db.students.find({ course: "MongoDB" }).projection({ name: 1, age: 1, _id: 0 })
```

👉 Output me:
- name aur age dikhengi
- _id hide rahegi

### Projection Rules
|Rule |	Explanation           |
|1	  | Field show karta hai  |
|0	  | Field hide karta hai  |

- _id	By default show hoti hai (explicitly hide karni padti hai)

## Find with Count Records
- Matching documents ki count nikalne ke liye:
```js
db.students.find({ course: "MongoDB" }).count()
```
👉 MongoDB course wale total records ki count dega.

## Find with Sorting Order
1. Ascending Order (1)
```js
db.students.find().sort({ age: 1 })
```
👉 Age ke hisaab se ascending order (small → large)

2. Descending Order (-1)
```js
db.students.find().sort({ age: -1 })
```
👉 Age ke hisaab se descending order (large → small)

## Find with Limited Records (limit)
- Sirf fixed number of records lane ke liye:
```js
db.students.find().limit(3)
```
👉 Sirf first 3 documents show honge.

## Find with Skip Records (skip)
- Initial records skip karne ke liye:
```js
db.students.find().skip(2)
```
👉 First 2 records skip ho jayenge.

## Find with Limit + Skip (Pagination)
```js
db.students.find().skip(2).limit(3)
```
👉 First 2 records skip karke next 3 records show karega
(Ye pagination ke liye use hota hai)

---

## MongoDB – Comparison Operators (With Examples)

MongoDB ke **Comparison Operators** values ko compare karne ke liye use hote hain  
(jaise equal, greater than, less than, etc.).

---

## Comparison Operators – Meaning + Example (Table)

| Operator  | Meaning (Kya karta hai)             | Example Query                                                   |
|-----------|-------------------------------------|-----------------------------------------------------------------|
| `$eq`     | Equal to (barabar)                  | `db.students.find({ age: { $eq: 20 } })`                        |
| `$ne`     | Not equal to                        | `db.students.find({ age: { $ne: 20 } })`                        |
| `$gt`     | Greater than                        | `db.students.find({ age: { $gt: 18 } })`                        |
| `$gte`    | Greater than or equal               | `db.students.find({ age: { $gte: 18 } })`                       |
| `$lt`     | Less than                           | `db.students.find({ age: { $lt: 25 } })`                        |
| `$lte`    | Less than or equal                  | `db.students.find({ age: { $lte: 25 } })`                       |
| `$in`     | List me se koi value match          | `db.students.find({ course: { $in: ["MongoDB", "React"] } })`   |
| `$nin`    | List me se koi value match na kare  | `db.students.find({ course: { $nin: ["MongoDB", "React"] } })`  |

---

## Range Example (Single Field)
```js
db.students.find({
  age: { $gte: 18, $lte: 25 }
})
```

---

## MongoDB – Logical Operators

MongoDB me **Logical Operators** ka use multiple conditions ko **combine** karne ke liye hota hai.  
Ye operators `find()`, `update()`, `delete()` jaise operations me use hote hain.

---

## Logical Operators – 

| Operator  | Meaning                         | Example Query                                                                 |
|-----------|---------------------------------|-------------------------------------------------------------------------------|
| `$and`    | Dono/all conditions match kare  | `db.students.find({ $and: [{ age: { $gte: 18 } }, { course: "MongoDB" }] })`  |
| `$or`     | Koi ek condition match kare     | `db.students.find({ $or: [{ course: "MongoDB" }, { course: "React" }] })`     |
| `$not`    | Condition ka ulta result        | `db.students.find({ age: { $not: { $gt: 25 } } })`                            |
| `$nor`    | Koi bhi condition match na kare | `db.students.find({ $nor: [{ age: { $lt: 18 } }, { course: "React" }] })`     |

---

## $and Operator Example
```js
db.students.find({
  $and: [
    { age: { $gte: 18 } },
    { course: "MongoDB" }
  ]
})
```

---

## MongoDB – Element Query Operators

MongoDB me **Element Query Operators** ka use ye check karne ke liye hota hai ki  
koi **field exist karta hai ya nahi** aur uska **data type kya hai**.

---

## Element Query Operators –

| Operator          | Meaning                           | Example Query                                     |
|-------------------|-----------------------------------|---------------------------------------------------|
| `$exists`         | Field present hai ya nahi         | `db.students.find({ email: { $exists: true } })`  |
| `$exists: false`  | Field exist nahi karta            | `db.students.find({ phone: { $exists: false } })` |
| `$type`           | Field ka specific data type check | `db.students.find({ age: { $type: "int" } })`     |

---

## $exists Operator Example

### Field Exists
```js
db.students.find({ email: { $exists: true } })
```

---

## MongoDB – Evaluation Operators

MongoDB me **Evaluation Operators** ka use expressions, regex aur JavaScript
based conditions ko evaluate karne ke liye hota hai.


## Evaluation Operators – Meaning + Example (Table)

| Operator    | Meaning                           | Example Query                                                 |
|-------------|-----------------------------------|---------------------------------------------------------------|
| `$regex`    | String me pattern search          | `db.users.find({ name: { $regex: "^A" } })`                   |
| `$options`  | Regex options (case-insensitive)  | `db.users.find({ name: { $regex: "mongo", $options: "i" } })` |
| `$expr`     | Fields ko compare karta hai       | `db.sales.find({ $expr: { $gt: ["$earned", "$spent"] } })`    |
| `$mod`      | Division remainder check          | `db.numbers.find({ value: { $mod: [2, 0] } })`                |
| `$text`     | Text search (index needed)        | `db.posts.find({ $text: { $search: "MongoDB" } })`            |
| `$where`    | JS condition apply karta hai      | `db.users.find({ $where: "this.age > 18" })`                  |

---

## $regex Operator Example
```js
db.students.find({ name: { $regex: "abhi", $options: "i" } })
```

---

## MongoDB – Regex Options (`$options`)

MongoDB me `$regex` ke saath **`$options`** ka use regex search ko control karne ke liye hota hai  
(jese case-insensitive search, multiline match, etc.).

---

## Common Regex Options (Table)

| Option  | Meaning (Kya karta hai)                       | Example                                         |
|---------|-----------------------------------------------|-------------------------------------------------|
| `i`     | Case-insensitive search                       | `{ name: { $regex: "mongo", $options: "i" } }`  |
| `m`     | Multiline mode (`^` & `$` har line pe apply)  | `{ text: { $regex: "^hello", $options: "m" } }` |
| `s`     | Dot (`.`) newline ko bhi match kare           | `{ text: { $regex: "a.*b", $options: "s" } }`   |
| `x`     | Regex me spaces & comments ignore karta hai   | `{ text: { $regex: "a  b", $options: "x" } }`   |

---

## Regex Options – Detailed Examples

### 1️⃣ `i` – Case Insensitive
```js
db.users.find({ name: { $regex: "abhishek", $options: "i" } })
```

---

## MongoDB – `findOneAndUpdate()` Method

`findOneAndUpdate()` MongoDB ka ek powerful method hai jo **ek hi step me**:
- document **find** karta hai  
- us document ko **update** karta hai  
- aur **updated / old document return** bhi karta hai

---

## Basic Syntax
```js
db.collection.findOneAndUpdate(
  filter,
  update,
  options
)
```

## Parameters Explanation (Table)
1. filter ---->	Kaunsa document update karna hai
2. update	----> Kya update karna hai ($set, $inc, etc.)
3. options ---->	Extra behavior control karta hai

## Options Table (Important)
1. returnDocument ----> "after"	Updated document return
2. returnDocument ----> "before"	Old document return (default)
3. upsert ----> true	Document nahi mile to insert
4. projection	----> Return hone wale fields limit
5. sort	----> Agar multiple match ho to kaunsa select

---

### Example
```js
db.students.findOneAndUpdate(
  { name: "Abhishek" },
  { $inc: { marks: 5 } },
  { returnDocument: "after" }
)

db.students.findOneAndUpdate(
  { name: "Rohit" },
  { $set: { age: 21, course: "MongoDB" } },
  { upsert: true }
)
```

## MongoDB – `findOneAndReplace()` Method

`findOneAndReplace()` MongoDB ka method hai jo:
- ek document **find** karta hai
- us document ko **poori tarah replace** karta hai
- aur **old ya new document return** karta hai

👉 Isme **partial update nahi hota**, pura document replace hota hai.

---

## Basic Syntax
```js
db.collection.findOneAndReplace(
  filter,
  replacement,
  options
)
```

### Example
```js
db.students.findOneAndReplace(
  { name: "Abhishek" },
  { name: "Abhishek", age: 23, course: "Backend" },
  { returnDocument: "after" }
)

db.students.findOneAndReplace(
  { name: "Rohit" },
  { name: "Rohit", age: 21, course: "MongoDB" },
  { upsert: true }
)
```

---

## MongoDB – `findOneAndDelete()` Method

`findOneAndDelete()` MongoDB ka method hai jo:
- ek document **find** karta hai
- us document ko **delete** karta hai
- aur **deleted document return** karta hai

👉 Ye method **atomic operation** hota hai (safe & reliable).

---

## Basic Syntax
```js
db.collection.findOneAndDelete(
  filter,
  options
)

db.students.findOneAndDelete(
  { course: "MongoDB" },
  { sort: { age: -1 } }
)

```

---

## MongoDB – Aggregation Pipeline Operators

MongoDB **Aggregation Pipeline** ka use data ko **process, transform aur analyze** karne ke liye hota hai.  
Pipeline multiple **stages** me kaam karti hai, jahan har stage data ko next stage ke liye transform karta hai.

---

## Aggregation Pipeline – Basic Syntax
```js
db.collection.aggregate([
  { stage1 },
  { stage2 },
  { stage3 }
])
```

## Aggregation Operators with Examples

| Operator        | Example                                               | Explanation                                                       |
|-----------------|-------------------------------------------------------|-------------------------------------------------------------------|
| `$match`        | `{ $match: { course: "MongoDB" } }`                   | Sirf MongoDB course wale documents filter karta hai               |
| `$project`      | `{ $project: { name: 1, age: 1, _id: 0 } }`           | Sirf name aur age fields show karta hai                           |
| `$group`        | `{ $group: { _id: "$course", total: { $sum: 1 } } }`  | Course ke hisaab se documents ko group karke count karta hai      |
| `$sort`         | `{ $sort: { age: -1 } }`                              | Age ko descending order me sort karta hai                         |
| `$limit`        | `{ $limit: 5 }`                                       | Sirf 5 documents return karta hai                                 |
| `$skip`         | `{ $skip: 10 }`                                       | Starting ke 10 documents skip karta hai                           |
| `$count`        | `{ $count: "totalStudents" }`                         | Total documents ka count deta hai                                 |
| `$unwind`       | `{ $unwind: "$tags" }`                                | Array ko multiple documents me convert karta hai                  |
| `$lookup`       | Join users & orders                                   | Dusri collection ke saath join karta hai                          |
| `$addFields`    | `{ $addFields: { status: "Active" } }`                | Document me naya field add karta hai                              |
| `$replaceRoot`  | `{ $replaceRoot: { newRoot: "$user" } }`              | Document ka root change karta hai                                 |
| `$sortByCount`  | `{ $sortByCount: "$course" }`                         | Field ke basis par count karke descending order me sort karta hai |
| `$sample`       | `{ $sample: { size: 5 } }`                            | Random 5 documents return karta hai                               |

### Example
```js
db.students.aggregate([
  { $match : age: { $gt: 20}},
  { $count: "names"}
])

db.students.aggregate([
  { $match : age: { $gt: 20}},
  { $sort : {age: 1, name: 1}},
  { $project: {name: 1, class: 1, _id: 0}}
  { $skip: 2},
  { $limit: 2}
])

db.students.aggregate([
  { $sort : {age: 1, name: 1}},
  { $project: {name: 1, class: 1, _id: 0,
    isValidAge: { $gt: ["$age", 20]}
  }}
])

db.students.aggregate([
  { $sortByCount: "$class"}
])

db.students.aggregate([
  { $sample: { size:2}}
])
```

---

## MongoDB – Aggregation `$group` Operator

`$group` operator MongoDB Aggregation Pipeline ka **sabse important stage** hai.  
Iska use documents ko **group karne** aur un par **calculations (sum, avg, count, etc.)** perform karne ke liye hota hai.

---

## Basic Syntax
```js
{
  $group: {
    _id: <grouping_field>,
    fieldName: { <accumulator>: <expression> }
  }
}
```

## $group – Key Parts (Table)
| Part	      | Meaning (Kya karta hai)                 |
|-------------|-----------------------------------------|
| $group	    | Grouping stage define karta hai         |
| _id	        | Kis field ke basis par group karna hai  |
| Accumulator	| Calculation perform karta hai           |
| Expression	| Kis field par calculation hogi          |

## MongoDB Aggregation – Important Accumulator Operators

| Operator    | Meaning (Kya karta hai)                                                         | Example                                                                 |
|-------------|---------------------------------------------------------------------------------|-------------------------------------------------------------------------|
| `$sum`      | Numeric values ka **total** nikalta hai ya documents ka **count** karta hai     | `{ totalAmount: { $sum: "$amount" } }`<br>`{ totalUsers: { $sum: 1 } }` |
| `$count`    | Group me **total documents** count karta hai (MongoDB 5+)                       | `{ totalStudents: { $count: {} } }`                                     |
| `$avg`      | Numeric field ka **average (mean)** nikalta hai                                 | `{ avgMarks: { $avg: "$marks" } }`                                      |
| `$min`      | Group me se **sabse chhoti value** nikalta hai                                  | `{ minAge: { $min: "$age" } }`                                          |
| `$max`      | Group me se **sabse badi value** nikalta hai                                    | `{ maxSalary: { $max: "$salary" } }`                                    |
| `$push`     | Group ke **saare values array** me add karta hai (duplicates allowed)           | `{ students: { $push: "$name" } }`                                      |
| `$addToSet` | **Unique values ka array** banata hai (duplicate nahi leta)                     | `{ cities: { $addToSet: "$city" } }`                                    |
| `$first`    | Group ka **pehla document ka value** return karta hai (sort ke baad meaningful) | `{ firstStudent: { $first: "$name" } }`                                 |
| `$last`     | Group ka **last document ka value** return karta hai (sort ke baad meaningful)  | `{ lastStudent: { $last: "$name" } }`                                   |
| `$top`      | **Highest value** return karta hai based on sort condition                      | `{ topper: { $top: { sortBy: { marks: -1 }, output: "$name" } } }`      |
| `$median`   | Numeric values ka **middle value (50th percentile)** nikalta hai                | `{ medianMarks: { $median: { input: "$marks" } } }`                     |

---

### 📌 Example Aggregation (Context ke liye)
```js
db.students.aggregate([
  { $sort: { marks: -1 } },
  {
    $group: {
      _id: "$course",
      totalStudents: { $sum: 1 },
      averageMarks: { $avg: "$marks" },
      topper: {
        $top: {
          sortBy: { marks: -1 },
          output: "$name"
        }
      }
    }
  }
])
```

---

## MongoDB Aggregation – `$lookup` Operator

`$lookup` MongoDB me **JOIN operation** ke liye use hota hai.  
Isse hum **ek collection ka data dusri collection ke sath combine** kar sakte hain (SQL JOIN jaisa).

---

## 📌 Syntax

```js
{
  $lookup: {
    from: "foreign_collection",
    localField: "local_field",
    foreignField: "foreign_field",
    as: "output_array"
  }
}
```

## 🔍 $lookup – Parts Explanation (Table)
1. from ---->	Dusri collection ka naam jisse data lana hai
2. localField	----> Current collection ka field
3. foreignField	----> Foreign collection ka matching field
4. as	----> Joined data ko kis field me store karna hai (array form me)

## Exampla 

```js
db.users.aggregate([
  {
    $lookup: {
      from: "orders",
      localField: "_id",
      foreignField: "userId",
      as: "orders"
    }
  }
])
```

## 🧠 $lookup with $unwind (Single Object Result)
```js
db.users.aggregate([
  {
    $lookup: {
      from: "orders",
      localField: "_id",
      foreignField: "userId",
      as: "orders"
    }
  },
  { $unwind: "$orders" }
])
```
➡️ Array ko single document bana deta hai.

---

## MongoDB Aggregation – `$replaceRoot` with `$mergeObjects` (Example Explanation)

Ye example dikhata hai ki kaise **nested array ke object** aur **root document** ko merge karke **ek flat document** banaya jata hai using:

- `$replaceRoot`
- `$mergeObjects`
- `$arrayElemAt`
- `$$ROOT`

---

## 📘 Original Document Structure

```js
{
  _id: 1,
  book: "Atomic Habits",
  student_id: 1,
  Student: [
    {
      _id: 1,
      name: "Akshay Kumar",
      class: "BCA"
    }
  ]
}
```

## 🔍 Samajhne layak baat
- Student ek array hai
- Array ke andar ek student object hai
- Hume student ke data ko main document ke sath merge karna hai

## 🧩 Aggregation Query Used
```js
db.books.aggregate([
  {
    $replaceRoot: {
      newRoot: {
        $mergeObjects: [
          { $arrayElemAt: ["$Student", 0] },
          "$$ROOT"
        ]
      }
    }
  }
])
```

## 🧠 Line-by-Line Explanation (Table)

1. `$replaceRoot` ---->	Poore document ka root replace karta hai
2. `newRoot` ----> Naya document structure define karta hai
3. `$mergeObjects` ----> Multiple objects ko merge karta hai
4. `$arrayElemAt: ["$Student", 0]` --->	Student array ka pehla object nikalta hai
5. `"$Student"` ---->	Student array ko refer karta hai
6. `0` ----> First index (kyunki array)
7. `$$ROOT` ---->	Poora original/root document
8. `Merge` order	Pehle student object, fir root document merge hota hai

---

## MongoDB Aggregation – `$bucket` & `$bucketAuto` Operators

`$bucket` aur `$bucketAuto` MongoDB aggregation me **data ko ranges (groups / buckets)** me divide karne ke liye use hote hain.  
Ye operators **analytics, reports, histograms** banane me bahut kaam aate hain.

---

## 🧺 `$bucket` Operator

`$bucket` me hum **manually ranges define** karte hain.

### 📌 Syntax

```js
{
  $bucket: {
    groupBy: <expression>,
    boundaries: [ <lower1>, <lower2>, ..., <upperN> ],
    default: "<default_bucket>",
    output: {
      <field1>: { <accumulator> : <expression> }
    }
  }
}

db.students.aggregate([
  {
    $bucket: {
      groupBy: "$age",
      boundaries: [18, 25, 30, 40],
      default: "Other",
      output: {
        totalStudents: { $sum: 1 }
      }
    }
  }
])

```

## $bucketAuto Operator

`$bucketAuto` automatically ranges create karta hai based on data distribution.

## 📌 Syntax
```js
{
  $bucketAuto: {
    groupBy: <expression>,
    buckets: <number>,
    output: {
      <field>: { <accumulator> : <expression> }
    }
  }
}

db.students.aggregate([
  {
    $bucketAuto: {
      groupBy: "$age",
      buckets: 3,
      output: {
        totalStudents: { $sum: 1 }
      }
    }
  }
])
```

## 🆚 $bucket vs $bucketAuto (Difference Table)
| `$bucket`             |	`$bucketAuto`           |
|-----------------------|-------------------------|
| Manual ranges define  |	Automatic ranges        |
| Fixed boundaries      |	Dynamic boundaries      |
| Full control          |	Easy & fast             |
| Complex but accurate	| Simple but approximate  |

---

## MongoDB Aggregation – `$addFields` & `$unwind` Operators

`$addFields` aur `$unwind` MongoDB aggregation pipeline ke **bahut commonly used operators** hain.  
Inka use **data transform**, **array handling**, aur **reports** banane me hota hai.

---

# 🔹 `$addFields` Operator

`$addFields` ka use **existing document me naya field add** karne ya **existing field modify** karne ke liye hota hai.  
Original document ke saare fields safe rehte hain.

---

## 📌 Syntax

```js
{
  $addFields: {
    <newField>: <expression>
  }
}

db.students.aggregate([
  {
    $addFields: {
      result: {
        $cond: [{ $gte: ["$marks", 40] }, "Pass", "Fail"]
      }
    }
  }
])
```

---

## 🔹 $unwind Operator

`$unwind` ka use array field ko multiple documents me convert karne ke liye hota hai.
Har array element ke liye ek naya document banta hai.

### 📌 Syntax
```js
{
  $unwind: "$arrayField"
}

db.students.aggregate([
  { $unwind: "$subjects" }
])
```

---

## MongoDB Aggregation – `$out`, `$merge` & `$unionWith` Operators

Ye teen operators MongoDB aggregation me **advanced data handling** ke liye use hote hain, jaise:
- Aggregation ka result kisi collection me save karna
- Existing data ko update/merge karna
- Multiple collections ka data combine karna

---

# 🔹 `$out` Operator

`$out` aggregation pipeline ka **final stage** hota hai.  
Iska use **aggregation ka output kisi new ya existing collection me store** karne ke liye hota hai.

---

## 📌 Syntax

```js
{ $out: "collection_name" }

db.students.aggregate([
  { $match: { course: "MongoDB" } },
  { $out: "mongo_students" }
])
```

# 🔹 $merge Operator
`$merge` `$out` ka advanced & safer version hai.
Isme hum decide kar sakte hain:

- Insert
- Update
- Replace
- Ignore

## 📌 Syntax
```js
{
  $merge: {
    into: "collection_name",
    on: "_id",
    whenMatched: "merge",
    whenNotMatched: "insert"
  }
}

db.students.aggregate([
  { $match: { course: "MongoDB" } },
  {
    $merge: {
      into: "mongo_students",
      on: "_id",
      whenMatched: "merge",
      whenNotMatched: "insert"
    }
  }
])
```

## 🧠 $merge Options Explanation (Table)
1. into ---->	Target collection
2. on	----> Matching field
3. whenMatched ---->	Match hone par kya karna
4. whenNotMatched	----> Match na ho to kya karna

## 🆚 $out vs $merge
| `$out`	      | `$merge`                    |
|---------------|-----------------------------|
| Collection    | overwrite	Controlled update |
| Simple        |	Flexible                    |
| Risky	        | Production-safe             |
| No conditions	| Conditions allowed          |

---

# 🔹 $unionWith Operator

`$unionWith` ka use do collections ke data ko combine karne ke liye hota hai.
Ye SQL ke UNION ALL jaisa hota hai.

## 📌 Syntax
```js
{
  $unionWith: {
    coll: "collection_name",
    pipeline: [ <stages> ]
  }
}

db.students.aggregate([
  { $match: { course: "MongoDB" } },
  {
    $unionWith: {
      coll: "alumni",
      pipeline: [
        { $match: { course: "MongoDB" } }
      ]
    }
  }
])
```
## ✅ Result
- students + alumni dono ka data ek output me aayega
- Duplicate remove nahi hote (UNION ALL)

## 🧠 $unionWith Explanation (Table)

1. coll ---->	Dusri collection
2. pipeline ---->	Optional filter
3. Output	----> Combined documents

---

## MongoDB Aggregation – `$facet` & `$fill` Operators

`$facet` aur `$fill` MongoDB aggregation ke **advanced operators** hain,  
jo **analytics, reporting, dashboards** jaise use-cases me kaafi useful hote hain.

---

# 🔹 `$facet` Operator

`$facet` ka use **ek hi aggregation pipeline me multiple sub-pipelines run** karne ke liye hota hai.  
Isse hum **ek hi data source se multiple results** nikaal sakte hain.

---

## 📌 Syntax

```js
{
  $facet: {
    <output1>: [ <stage1>, <stage2>, ... ],
    <output2>: [ <stage1>, <stage2>, ... ]
  }
}
```
Aggregation Query
```js
db.students.aggregate([
  {
    $facet: {
      ageStats: [
        { $group: { _id: null, avgAge: { $avg: "$age" } } }
      ],
      topStudents: [
        { $match: { marks: { $gte: 80 } } },
        { $project: { name: 1, marks: 1, _id: 0 } }
      ]
    }
  }
])
```

## 🧠 $facet Explanation (Table)
1. `$facet`	----> Multiple pipelines ek saath run karta hai
2. ageStats ---->	Average age calculate karta hai
3. topStudents ----> High-score students list
4. Input ---->	Same documents sab pipelines ko milte hain
5. Output ---->	Single document me multiple arrays

## 🔹 $fill Operator

- `$fill` ka use missing (null) values ko fill karne ke liye hota hai.
- Ye time-series data aur analytics me bahut useful hai.
- $fill MongoDB 5.3+ me introduce hua hai.

## 📌 Syntax
```js
{
  $fill: {
    output: {
      <field>: { method: <method> }
    }
  }
}
```
Aggregation Query
```js
db.sales.aggregate([
  {
    $fill: {
      output: {
        revenue: { method: "linear" }
      }
    }
  }
])
```
📘 $fill with Constant Value
```js
{
  $fill: {
    output: {
      revenue: { method: "constant", value: 0 }
    }
  }
}
```

---

## MongoDB Arithmetic Operators (Table with Examples)

MongoDB ke **Arithmetic Operators** aggregation pipeline me **calculations** karne ke liye use hote hain  
(jaise total, average, discount, percentage, rounding, etc.).

---

### 📊 Arithmetic Operators – Meaning & Example

| Operator    | Meaning (Kya karta hai)               | Example                                     | Output Explanation    |
|-------------|---------------------------------------|---------------------------------------------|-----------------------|
| `$add`      | Numbers ko add karta hai              | `{ $add: ["$price", "$tax"] }`              | price + tax           |
| `$subtract` | Ek number ko dusre se minus karta hai | `{ $subtract: ["$salary", "$deduction"] }`  | salary − deduction    |
| `$multiply` | Numbers multiply karta hai            | `{ $multiply: ["$qty", "$price"] }`         | qty × price           |
| `$divide`   | Division karta hai                    | `{ $divide: ["$total", "$count"] }`         | total ÷ count         |
| `$mod`      | Remainder (modulus) deta hai          | `{ $mod: ["$marks", 2] }`                   | Even / Odd check      |
| `$pow`      | Power calculate karta hai             | `{ $pow: [2, 3] }`                          | 2³ = 8                |
| `$round`    | Value round karta hai                 | `{ $round: ["$avg", 2] }`                   | 2 decimal tak round   |
| `$sqrt`     | Square root nikalta hai               | `{ $sqrt: "$number" }`                      | √number               |
| `$abs`      | Absolute (positive) value deta hai    | `{ $abs: "$balance" }`                      | -50 → 50              |
| `$ceil`     | Next highest integer deta hai         | `{ $ceil: 4.2 }`                            | 5                     |
| `$floor`    | Previous lowest integer deta hai      | `{ $floor: 4.9 }`                           | 4                     |
| `$trunc`    | Decimal hata deta hai                 | `{ $trunc: 4.9 }`                           | 4                     |

---

## 📘 Sample Collection

```js
{
  name: "Abhishek",
  price: 100,
  tax: 18,
  qty: 2,
  discount: 15,
  avg: 4.567,
  balance: -200
}

db.products.aggregate([
  {
    $project: {
      totalPrice: { $add: ["$price", "$tax"] },
      finalAmount: { $subtract: [{ $multiply: ["$price", "$qty"] }, "$discount"] },
      roundedAvg: { $round: ["$avg", 2] },
      absBalance: { $abs: "$balance" },
      ceilValue: { $ceil: "$avg" },
      floorValue: { $floor: "$avg" }
    }
  }
])
```

---

## 🧵 MongoDB String Operators (Aggregation)

MongoDB ke **String Operators** aggregation pipeline me strings ko  
**convert, modify, search, compare, trim, split, regex** operations ke liye use hote hain.

---

### 📊 String Operators – Meaning & Example

| Operator          | Meaning (Simple Language)             | Example                                                           | Output / Explanation      |
|-------------------|---------------------------------------|-------------------------------------------------------------------|---------------------------|
| `$toString`       | Value ko string me convert karta hai  | `{ $toString: 123 }`                                              | `"123"`                   |
| `$toUpper`        | String ko UPPERCASE karta hai         | `{ $toUpper: "$name" }`                                           | `"abhishek" → "ABHISHEK"` |
| `$toLower`        | String ko lowercase karta hai         | `{ $toLower: "$name" }`                                           | `"Abhi" → "abhi"`         |
| `$strLenBytes`    | String length (bytes me) deta hai     | `{ $strLenBytes: "$name" }`                                       | ASCII bytes count         |
| `$strLenCP`       | String length (characters me)         | `{ $strLenCP: "$name" }`                                          | Actual character count    |
| `$strcasecmp`     | Case-insensitive string compare       | `{ $strcasecmp: ["abc","ABC"] }`                                  | `0` (equal)               |
| `$substr`         | String ka part nikalta hai            | `{ $substr: ["$name", 0, 4] }`                                    | `"Abhi"`                  |
| `$substrBytes`    | Bytes ke basis par substring          | `{ $substrBytes: ["$name",0,3] }`                                 | Byte based                |
| `$substrCP`       | Characters ke basis par substring     | `{ $substrCP: ["$name",0,3] }`                                    | Char based                |
| `$concat`         | Multiple strings ko jodta hai         | `{ $concat: ["$fname"," ","$lname"] }`                            | `"Abhi Jain"`             |
| `$split`          | String ko array me todta hai          | `{ $split: ["a,b,c",","] }`                                       | `["a","b","c"]`           |
| `$trim`           | Dono side se space remove karta hai   | `{ $trim: { input:"  hi  " } }`                                   | `"hi"`                    |
| `$ltrim`          | Left side se space remove             | `{ $ltrim: { input:"  hi" } }`                                    | `"hi"`                    |
| `$rtrim`          | Right side se space remove            | `{ $rtrim: { input:"hi  " } }`                                    | `"hi"`                    |
| `$replaceOne`     | Pehla matching word replace           | `{ $replaceOne:{ input:"hi hi", find:"hi", replacement:"hey"} }`  | `"hey hi"`                |
| `$replaceAll`     | Saare matching words replace          | `{ $replaceAll:{ input:"hi hi", find:"hi", replacement:"hey"} }`  | `"hey hey"`               |
| `$indexOfBytes`   | Byte position return karta hai        | `{ $indexOfBytes:["hello","e"] }`                                 | `1`                       |
| `$indexOfCP`      | Character position return karta hai   | `{ $indexOfCP:["hello","e"] }`                                    | `1`                       |
| `$regexFind`      | Regex ka first match deta hai         | `{ $regexFind:{ input:"abc123", regex:/\d+/ } }`                  | `{ match:"123" }`         |
| `$regexFindAll`   | Regex ke saare matches                | `{ $regexFindAll:{ input:"a1b2", regex:/\d/ } }`                  | `[1,2]`                   |
| `$regexMatch`     | Regex match hai ya nahi               | `{ $regexMatch:{ input:"abc", regex:/a/ } }`                      | `true`                    |
| `$dateFromString` | String → Date convert                 | `{ $dateFromString:{ dateString:"2025-01-01" } }`                 | ISODate                   |
| `$dateToString`   | Date → String convert                 | `{ $dateToString:{ format:"%Y-%m-%d", date:"$createdAt" } }`      | `"2025-01-01"`            |

---

## 🧩 Example Aggregation

```js
db.users.aggregate([
  {
    $project: {
      upperName: { $toUpper: "$name" },
      nameLength: { $strLenCP: "$name" },
      fullName: { $concat: ["$firstName", " ", "$lastName"] },
      trimmedEmail: { $trim: { input: "$email" } }
    }
  }
])
```

---

## 📅 MongoDB Date Operators (Aggregation)

MongoDB **Date Operators** aggregation pipeline me  
date se **year, month, day, time nikalne**,  
date **add / subtract**,  
aur **date ↔ string conversion** ke liye use hote hain.

---

### 📊 Date Operators – Meaning & Example

| Operator          | Kya karta hai (Simple)        | Example                                                       | Output              |
|-------------------|-------------------------------|---------------------------------------------------------------|---------------------|
| `$hour`           | Date se hour nikalta hai      | `{ $hour: "$createdAt" }`                                     | `14`                |
| `$minute`         | Minute nikalta hai            | `{ $minute: "$createdAt" }`                                   | `30`                |
| `$second`         | Second nikalta hai            | `{ $second: "$createdAt" }`                                   | `45`                |
| `$millisecond`    | Millisecond nikalta hai       | `{ $millisecond: "$createdAt" }`                              | `123`               |
| `$month`          | Month nikalta hai (1–12)      | `{ $month: "$createdAt" }`                                    | `12`                |
| `$week`           | Week number nikalta hai       | `{ $week: "$createdAt" }`                                     | `52`                |
| `$year`           | Year nikalta hai              | `{ $year: "$createdAt" }`                                     | `2025`              |
| `$dayOfMonth`     | Month ka din                  | `{ $dayOfMonth: "$createdAt" }`                               | `25`                |
| `$dayOfWeek`      | Week ka din (1=Sun)           | `{ $dayOfWeek: "$createdAt" }`                                | `4`                 |
| `$dayOfYear`      | Year ka day number            | `{ $dayOfYear: "$createdAt" }`                                | `359`               | 
| `$isoDayOfWeek`   | ISO weekday (1=Mon)           | `{ $isoDayOfWeek: "$createdAt" }`                             | `3`                 |
| `$isoWeek`        | ISO week number               | `{ $isoWeek: "$createdAt" }`                                  | `52`                |
| `$isoWeekYear`    | ISO week ka year              | `{ $isoWeekYear: "$createdAt" }`                              | `2025`              |
| `$dateAdd`        | Date me time add karta hai    | `{ $dateAdd:{ startDate:"$d", unit:"day", amount:5 }}`        | +5 days             |
| `$dateSubtract`   | Date se time minus karta hai  | `{ $dateSubtract:{ startDate:"$d", unit:"month", amount:1 }}` | -1 month            |
| `$dateDiff`       | Do dates ka difference        | `{ $dateDiff:{ startDate:"$s", endDate:"$e", unit:"day"} }`   | Days diff           |
| `$dateFromParts`  | Parts se date banata hai      | `{ $dateFromParts:{ year:2025, month:1, day:1 }}`             | ISODate             |
| `$dateToParts`    | Date ko parts me todta hai    | `{ $dateToParts:{ date:"$createdAt"} }`                       | `{year,month,day}`  |
| `$dateTrunc`      | Date truncate karta hai       | `{ $dateTrunc:{ date:"$d", unit:"month"} }`                   | Month start         |
| `$dateFromString` | String → Date                 | `{ $dateFromString:{ dateString:"2025-01-01"} }`              | ISODate             |
| `$dateToString`   | Date → String                 | `{ $dateToString:{ format:"%Y-%m-%d", date:"$d"} }`           | `"2025-01-01"`      |
| `$toDate`         | Value ko Date me convert      | `{ $toDate:"2025-01-01" }`                                    | ISODate             |

---

## 🧩 Example Aggregation

```js
db.orders.aggregate([
  {
    $project: {
      orderYear: { $year: "$createdAt" },
      orderMonth: { $month: "$createdAt" },
      orderDay: { $dayOfMonth: "$createdAt" },
      nextWeek: {
        $dateAdd: {
          startDate: "$createdAt",
          unit: "day",
          amount: 7
        }
      }
    }
  }
])
```

---

## 📦 MongoDB Array Operators (Aggregation)

MongoDB **Array Operators** ka use aggregation pipeline me  
arrays ke upar **access, filter, transform, sort, merge** karne ke liye hota hai.

---

### 📊 Array Operators – Meaning & Example

| Operator          | Kya karta hai (Simple)                          | Example                                                                       | Output / Explanation  |
|-------------------|-------------------------------------------------|-------------------------------------------------------------------------------|-----------------------|
| `$arrayElemAt`    | Array ka specific index value deta hai          | `{ $arrayElemAt: ["$marks", 1] }`                                             | 2nd element           |
| `$firstN`         | Array ke first N elements deta hai              | `{ $firstN: { input:"$arr", n:2 }}`                                           | First 2 values        |
| `$lastN`          | Array ke last N elements deta hai               | `{ $lastN: { input:"$arr", n:2 }}`                                            | Last 2 values         |
| `$maxN`           | Array se top N max values                       | `{ $maxN:{ input:"$arr", n:2 }}`                                              | Max 2 values          |
| `$minN`           | Array se top N min values                       | `{ $minN:{ input:"$arr", n:2 }}`                                              | Min 2 values          |
| `$slice`          | Array ka ek portion return karta hai            | `{ $slice:["$arr", 1, 3] }`                                                   | Sub-array             |
| `$sortArray`      | Array ko sort karta hai                         | `{ $sortArray:{ input:"$arr", sortBy:1 }}`                                    | Sorted array          |
| `$reverseArray`   | Array ko reverse karta hai                      | `{ $reverseArray:"$arr" }`                                                    | Reverse order         |
| `$size`           | Array ki length deta hai                        | `{ $size:"$arr" }`                                                            | Total elements        |
| `$in`             | Value array me hai ya nahi check karta hai      | `{ $in:["A", "$grades"] }`                                                    | true / false          |
| `$indexOfArray`   | Value ka index batata hai                       | `{ $indexOfArray:["$arr", 20] }`                                              | Index no              |
| `$isArray`        | Check karta hai array hai ya nahi               | `{ $isArray:"$arr" }`                                                         | true / false          |
| `$map`            | Har element pe operation apply karta hai        | `{ $map:{ input:"$arr", as:"n", in:{ $multiply:["$$n",2]}}}`                  | Transformed array     |
| `$filter`         | Condition ke basis pe elements filter karta hai | `{ $filter:{ input:"$arr", cond:{ $gt:["$$this",10]}}}`                       | Filtered array        |
| `$reduce`         | Array ko single value me convert karta hai      | `{ $reduce:{ input:"$arr", initialValue:0, in:{ $add:["$$value","$$this"]}}}` | Sum                   |
| `$range`          | Numbers ka array generate karta hai             | `{ $range:[0,5,1] }`                                                          | `[0,1,2,3,4]`         |
| `$concatArrays`   | Multiple arrays ko merge karta hai              | `{ $concatArrays:["$a1","$a2"] }`                                             | Combined array        |
| `$zip`            | Multiple arrays ko pair karta hai               | `{ $zip:{ inputs:["$a1","$a2"] }}`                                            | Paired array          |
| `$arrayToObject`  | Array → Object convert karta hai                | `{ $arrayToObject:"$arr" }`                                                   | Object                |
| `$objectToArray`  | Object → Array convert karta hai                | `{ $objectToArray:"$obj" }`                                                   | Array                 |

---

## 🧩 Example Aggregation

```js
db.students.aggregate([
  {
    $project: {
      firstTwoMarks: { $firstN: { input: "$marks", n: 2 } },
      totalMarks: {
        $reduce: {
          input: "$marks",
          initialValue: 0,
          in: { $add: ["$$value", "$$this"] }
        }
      },
      passedMarks: {
        $filter: {
          input: "$marks",
          cond: { $gte: ["$$this", 40] }
        }
      }
    }
  }
])
```

---

## 🔄 MongoDB Type Operators (Aggregation)

MongoDB **Type Operators** ka use aggregation pipeline me  
**data type convert karne**, **type check karne** aur **validation** ke liye hota hai.

---

### 📊 Type Operators – Meaning & Example

| Operator      | Kya karta hai (Simple)                      | Example                                             | Output / Explanation |
|---------------|---------------------------------------------|-----------------------------------------------------|----------------------|
| `$toString`   | Value ko string me convert karta hai        | `{ $toString: "$age" }`                             | `"25"`               |
| `$toInt`      | Value ko integer banata hai                 | `{ $toInt: "$price" }`                              | `100`                |
| `$toLong`     | Value ko long type me convert karta hai     | `{ $toLong: "$count" }`                             | `NumberLong`         |
| `$toDouble`   | Value ko double banata hai                  | `{ $toDouble: "$amount" }`                          | `99.99`              |
| `$toDecimal`  | Value ko decimal banata hai                 | `{ $toDecimal: "$salary" }`                         | `Decimal128`         |
| `$toBool`     | Value ko boolean me convert karta hai       | `{ $toBool: "$isActive" }`                          | `true / false`       |
| `$toDate`     | Value ko date object me convert karta hai   | `{ $toDate: "$createdAt" }`                         | ISODate              |
| `$toObjectId` | String ko ObjectId me convert karta hai     | `{ $toObjectId: "$userId" }`                        | ObjectId             |
| `$convert`    | Generic conversion (error handling ke sath) | `{ $convert:{ input:"$age", to:"int", onError:0 }}` | Safe conversion      |
| `$type`       | Field ka data type batata hai               | `{ $type:"$price" }`                                | `"double"`           |
| `$isNumber`   | Check karta hai number hai ya nahi          | `{ $isNumber:"$qty" }`                              | `true / false`       |

---

## 🧩 Example Aggregation

```js
db.users.aggregate([
  {
    $project: {
      ageString: { $toString: "$age" },
      priceInt: { $toInt: "$price" },
      isQtyNumber: { $isNumber: "$qty" },
      createdDate: { $toDate: "$createdAt" }
    }
  }
])
```

---

## 🔀 MongoDB Conditional Operators (Aggregation)

MongoDB **Conditional Operators** ka use aggregation pipeline me  
**conditions ke basis par value decide karne** ke liye hota hai  
(jaise: if–else, null check, multiple cases).

---

### 📊 Conditional Operators – Meaning & Example

| Operator | Kya karta hai (Simple) | Example | Output / Explanation |
|--------|------------------------|---------|---------------------|
| `$cond` | If–Else condition lagata hai | `{ $cond: [ { $gte: ["$marks", 40] }, "Pass", "Fail" ] }` | Marks ≥ 40 → Pass |
| `$ifNull` | Null ya missing value ko replace karta hai | `{ $ifNull: ["$email", "Not Provided"] }` | Null ho to default value |
| `$switch` | Multiple conditions (switch-case jaisa) | See below | First matching case ka result |

---

## 🧠 `$cond` – If Else Example

```js
db.students.aggregate([
  {
    $project: {
      name: 1,
      result: {
        $cond: [
          { $gte: ["$marks", 40] },
          "Pass",
          "Fail"
        ]
      }
    }
  }
])
```

## 🧠 $ifNull – Null Check Example
```js
db.users.aggregate([
  {
    $project: {
      name: 1,
      email: {
        $ifNull: ["$email", "Email Not Available"]
      }
    }
  }
])
```

---

## 🧠 $switch – Multiple Conditions Example
```js
db.students.aggregate([
  {
    $project: {
      name: 1,
      grade: {
        $switch: {
          branches: [
            { case: { $gte: ["$marks", 90] }, then: "A+" },
            { case: { $gte: ["$marks", 75] }, then: "A" },
            { case: { $gte: ["$marks", 60] }, then: "B" }
          ],
          default: "C"
        }
      }
    }
  }
])
```

---

## 📦 MongoDB Capped Collection

**Capped Collection** MongoDB ki ek special type ki collection hoti hai  
jisme **fixed size** hota hai aur data **FIFO (First In – First Out)** order me store hota hai.

👉 Jaise hi collection full hoti hai, **purana data automatically delete** ho jata hai  
aur naya data insert ho jata hai.

---

## 🔑 Key Features of Capped Collection

| Feature             | Explanation                                     |
|---------------------|-------------------------------------------------|
| Fixed Size          | Collection ka size pehle se define hota hai     |
| FIFO Order          | Oldest document pehle remove hota hai           |
| Auto Delete         | Manual delete ki zarurat nahi                   |
| High Performance    | Insert & read fast hota hai                     |
| No Document Delete  | `deleteOne()` / `deleteMany()` allowed nahi     |
| No Update Growth    | Document size badhane wali update allowed nahi  |

---

## 🛠 Create Capped Collection
```js
db.createCollection("logs", {
  capped: true,
  size: 1024,
  max: 5
})
```

## Existing Collection ko capped collection me convert karna
```js
db.runCommand({
  convertToCapped: "students",
  size: 51200
})
```

## Capped ki max value or size ko increase karna
```js
db.runCommand({
  collMod: "students",
  cappedMax: 8
})

db.runCommand({
  collMod: "students",
  cappedSize: 8
})
```

## 🔍 Parameters Explanation
1. capped: ----> true	Collection ko capped banata hai
2. size ---->	Maximum size (bytes me)
3. max ----> Maximum documents allowed

---

# MongoDB – Types of Indexes

Indexes MongoDB me data ko **fast retrieve** karne ke liye use hote hain.  
Ye bilkul book ke index ki tarah kaam karte hain.

---

## 📌 Types of Indexes in MongoDB

| Index Type | Description |
|-----------|-------------|
| Single Field Index | Index on a single field |
| Compound Index | Index on multiple fields |
| Unique Index | Prevents duplicate values |
| Text Index | Used for text search |
| Wildcard Index | Index for dynamic fields |
| Geospatial Index | Used for location-based queries |
| Hashed Index | Used for sharding |

---

## 1️⃣ Single Field Index

- Sirf **ek field** par index hota hai  
- `_id` index by default hota hai

### Example
```js
db.users.createIndex({ age: 1 })
```

## 2️⃣ Compound Index

- Multiple fields par index
- Order matter karta hai

### Example
```js
db.users.createIndex({ age: 1, city: -1 })
```

## 3️⃣ Unique Index

- Duplicate values allow nahi karta
- Mostly email, username jaise fields ke liye

### Example
```js
db.users.createIndex({ email: 1 }, { unique: true })
```

## 4️⃣ Text Index

- Full-text search ke liye use hota hai
- $text operator ke sath kaam karta hai

### Example
```js
db.posts.createIndex({ title: "text", content: "text" })
db.posts.find({ $text: { $search: "mongodb" } })
```

## 5️⃣ Wildcard Index

- Dynamic ya unknown fields ke liye
- Flexible schema ke cases me useful

### Example
```js
db.products.createIndex({ "specs.$**": 1 })
```

## 6️⃣ Geospatial Index

- Location-based queries ke liye
- Maps, distance calculation, nearby search

### Example
```js
db.places.createIndex({ location: "2dsphere" })
```

## 7️⃣ Hashed Index

- Field value ka hash banata hai
- Mainly sharding ke liye use hota hai
- Range queries support nahi karta

### Example
```js
db.users.createIndex({ userId: "hashed" })
```

---

# 🔹 MongoDB Import JSON (mongoimport)

- mongoimport ka use hum JSON / CSV file ka data MongoDB collection me import karne ke liye karte hain.

## 📌 Basic Command
```bash
mongoimport "D:/test.json" -d school -c testing --jsonArray
```
## 🧠 Command Explanation

- mongoimport	MongoDB ka import tool
- "D:/test.json"	JSON file ka path
- -d school	Database name (school)
- -c testing	Collection name (testing)
- --jsonArray	File me data JSON array format me hai

## 📄 Example JSON File (test.json)
```json
[
  { "name": "Rahul", "age": 20 },
  { "name": "Amit", "age": 22 }
]
```
- ➡️ Ye command run karne ke baad data school.testing collection me insert ho jayega.

# 🔹 MongoDB Backup (mongodump)

- mongodump ka use database ya collection ka backup lene ke liye hota hai.

## 📦 MongoDB: Why We Use Backup?

| **Reason**                    | **Explanation**                                                                                                   |
|-------------------------------|-------------------------------------------------------------------------------------------------------------------|
| **Data Protection**           | Accidental deletion, data corruption, ya hardware failure ki wajah se hone wale data loss se bachata hai.         |
| **Disaster Recovery**         | System crash, cyberattack, ya natural disaster ke case me database ko jaldi restore karne me help karta hai.      |
| **Version Control**           | Audits, debugging, ya analysis ke liye data ko kisi specific point-in-time se restore karne ki facility deta hai. |
| **Migration & Deployment**    | Database ko ek server se dusre server par safely move karne me madad karta hai.                                   |
| **Compliance & Regulations**  | Legal aur business requirements jaise data retention, security standards, aur audits ko meet karta hai.           |
| **Testing & Development**     | Developers ko real production-like data par testing karne deta hai bina actual production data ko affect kiye.    |

---

## 💾 MongoDB Backup using `mongodump`

`mongodump` MongoDB ka utility tool hai jo database ka **backup create** karne ke kaam aata hai. Isse aap **full database**, **specific database**, ya **specific collection** ka backup le sakte ho.

---

### 📊 MongoDB Backup Summary Table

| Backup Type                     | Command Syntax                                                    | Example                                           | Use Case                                      |
|---------------------------------|-------------------------------------------------------------------|---------------------------------------------------|-----------------------------------------------|
| **Full Backup**                 | `mongodump --out <backup_path>`                                   | `mongodump --out c:\backup`                       | Poore MongoDB instance ka backup lene ke liye |
| **Specific Database Backup**    | `mongodump -d <db_name> --out <backup_path>`                      | `mongodump -d school --out c:\backup`             | Sirf ek database ka backup lene ke liye       |
| **Specific Collection Backup**  | `mongodump -d <db_name> -c <collection_name> --out <backup_path>` | `mongodump -d school -c students --out c:\backup` | Sirf ek collection ka backup lene ke liye     |

---

### 📌 Explanation (Short)

- **Full Backup**  
  Saare databases, collections, aur unka data backup ho jaata hai.

- **Specific Database Backup**  
  Sirf selected database ka backup create hota hai.

- **Specific Collection Backup**  
  Selected database ki sirf ek collection ka backup hota hai.

---

### ✅ Important Notes
- `mongodump` `.bson` files generate karta hai.
- Ye backup files `mongorestore` ke through restore hoti hain.
- Backup lene ke liye MongoDB service running honi chahiye.


## 🔄 MongoDB Restore using `mongorestore`

`mongorestore` MongoDB ka utility tool hai jo **backup se data restore** karne ke kaam aata hai. Isse aap **full backup**, **specific database**, ya **specific collection** restore kar sakte ho.

---

### 📊 MongoDB Restore Summary Table

| Restore Type                    | Command Syntax                                                | Example                                                             | Use Case                                        |
|---------------------------------|---------------------------------------------------------------|---------------------------------------------------------------------|-------------------------------------------------|
| **Full Backup Restore**         | `mongorestore --dir <backup_path>`                            | `mongorestore --dir c:\backup`                                      | Poore MongoDB instance ko restore karne ke liye |
| **Specific Database Restore**   | `mongorestore -d <db_name> <backup_path>`                     | `mongorestore -d school c:\backup\school`                           | Sirf ek database restore karne ke liye          |
| **Specific Collection Restore** | `mongorestore -d <db_name> -c <collection_name> <file.bson>`  | `mongorestore -d school -c students c:\backup\school\students.bson` | Sirf ek collection restore karne ke liye        |

---

### 📌 Explanation (Short)

- **Full Backup Restore**  
  Backup directory ke andar maujood saare databases apne original structure ke saath restore ho jaate hain.

- **Specific Database Restore**  
  Selected database restore hota hai, baaki databases ignore ho jaate hain.

- **Specific Collection Restore**  
  Sirf ek particular collection `.bson` file se restore hoti hai (most specific restore).

---

### ✅ Important Notes
- `mongorestore`, `mongodump` se banaye gaye backups ke saath use hota hai.
- Restore se pehle ensure karein ki MongoDB service running ho.
- Collection restore ke liye `.bson` file ka hona mandatory hai.

---

## 👤 MongoDB: User Management Commands

Yeh commands MongoDB me **users ko manage** karne ke liye use hoti hain — jaise user create karna, delete karna, roles assign/remove karna, aur authentication.

---

### 📊 MongoDB User Management Commands Table

| **Command**                 | **Description**           | **Explanation**                                                                     |
|-----------------------------|---------------------------|-------------------------------------------------------------------------------------|
| `db.createUser()`           | Creates a new user        | Ek naya user banata hai with username, password aur specific roles ke saath.        |
| `db.updateUser()`           | Updates an existing user  | Existing user ki details update karta hai jaise password, roles, ya custom data.    |
| `db.dropUser()`             | Deletes a specific user   | Database se specified username waale user ko delete kar deta hai.                   |
| `db.dropAllUsers()`         | Deletes all users         | Current database ke **saare users delete** kar deta hai. Carefully use karein.      |
| `db.grantRolesToUser()`     | Assigns roles             | Existing user ko **additional roles** assign karta hai.                             |
| `db.revokeRolesFromUser()`  | Removes roles             | User se pehle se diye gaye roles **remove** kar deta hai.                           |
| `db.getUser()`              | Views user info           | Ek specific user ki details jaise roles aur privileges dikhata hai.                 |
| `db.getUsers()`             | Views all users           | Current database ke **saare users ki list** aur unki details dikhata hai.           |
| `db.auth()`                 | Authenticate user         | Mongo shell ya application me user ko login (authenticate) karne ke kaam aata hai.  |
| `db.changeUserPassword()`   | Changes user password     | Existing user ka password change karne ke liye use hota hai.                        |

---

### ✅ Important Notes
- Yeh commands **mongo shell** ya **mongosh** ke andar run ki jaati hain.
- User management commands chalane ke liye aapke paas **admin ya proper privileges** hone chahiye.
- Production environment me users aur roles ko carefully manage karna chahiye for security.

---

## 🔐 MongoDB: User Create & Authenticate

Jab MongoDB me **authentication enable** hoti hai, tab database access ke liye users ko apne **credentials (username & password)** verify karne padte hain.

User create karne se pehle aapko **us database me switch** karna hota hai jisme user define kiya jaayega. Is database ko **authentication database** bhi kehte hain.

---

## 👤 User Creation Command (`db.createUser()`)

Yeh command MongoDB me **naya user create** karti hai aur usko **specific roles** assign karti hai.

### 📌 Syntax
```javascript
db.createUser({
  user: "<username>",
  pwd: "<password>", // Ya passwordPrompt() for better security
  roles: [{ role: "<role_name>", db: "<database_name>" }]
})

db.createUser({
  user: "admin",
  pwd: "admin123",
  roles: [{ role: "readWrite", db: "school" }]
})
```

## 🔐 MongoDB: Built-in Roles (Database-Specific)

Yeh **pre-defined roles** MongoDB dwara provide kiye jaate hain jo **ek specific database** par users ka access control manage karte hain.

---

### 📊 Database-Specific Built-in Roles

| **Role**      | **Description**                                                                      |
|---------------|--------------------------------------------------------------------------------------|
| **read**      | Allows the user to read data from the database.                                      |
| **readWrite** | Allows the user to read and write data to the database.                              |
| **dbAdmin**   | Allows the user to perform administrative tasks like indexing and schema operations. |
| **userAdmin** | Allows the user to manage users and roles within the database.                       |
| **dbOwner**   | Combines `readWrite`, `dbAdmin`, and `userAdmin` roles.                              |

---

### ⚠️ Important Note
- Yeh roles **sirf usi database par apply** hote hain jahan inhe assign kiya jaata hai.
- Yeh roles **global access provide nahi karte**.
- Global level permissions ke liye **cluster-wide roles** (jaise `root`, `clusterAdmin`) use kiye jaate hain.

---

## 🔑 User Authentication Command (db.auth())

- Jab MongoDB server par authorization enable hoti hai, tab shell ya application me login karne ke liye authentication required hoti hai.

### 📌 Syntax
```js
db.auth("<username>", "<password>") // Ya passwordPrompt()
```

### 🧪 Example (Authenticate User)
```js
db.auth("admin", "admin123")
```

### 📌 Result

✅ Success: 1 return hota hai (authentication successful)
❌ Failure: 0 return hota hai (wrong credentials)

### ✅ Important Notes

- User creation aur authentication commands mongo shell / mongosh me run hoti hain.
- Secure environments me passwordPrompt() use karna recommended hota hai.
- User ko wahi permissions milti hain jo uske role define karta hai (RBAC concept).

---

## 🔑 MongoDB: Superuser & Global Roles

Yeh roles **poore MongoDB instance / cluster** par apply hote hain aur high-level permissions dete hain.

---

## 🦸 Superuser Role

| **Role** | **Description**                                                                                                                                    |
|----------|----------------------------------------------------------------------------------------------------------------------------------------------------|
| **root** | Full administrative access deta hai **sabhi databases, users, aur operations** par. Yeh role top-level administrative tasks ke liye use hota hai.  |

---

## 👀 Read-Only Global Role

| **Role**            | **Description**                                                                                                                                                                     |
|---------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| **readAnyDatabase** | MongoDB instance ke **sabhi databases** ka read-only access deta hai (except internal databases jaise `local` aur `config`). Data view karne ke liye useful, modify nahi kar sakta. |

---

## 👤 User Administration Roles (All Databases)

Yeh roles **users aur roles management** ke liye use hote hain across all databases.

| **Role**                  | **Description**                                                                                                                                                                                   |
|---------------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| **userAdminAnyDatabase**  | Sabhi databases me users aur roles create, modify, delete karne ki permission deta hai (except `local` aur `config`). Includes actions like `createUser`, `dropUser`, `grantRole`, `revokeRole`.  |

---

## 🛠️ Database Administration Roles (All Databases)

Yeh roles **database-level administrative tasks** ke liye hote hain, lekin user management include nahi karte.

| **Role**                | **Description**                                                                                                                                   |
|-------------------------|---------------------------------------------------------------------------------------------------------------------------------------------------|
| **dbAdminAnyDatabase**  | Sabhi databases par administrative privileges deta hai jaise collections manage karna, indexes create/drop karna, aur database statistics dekhna. |

---

## 🌐 Cluster-Level Roles

Yeh roles **MongoDB cluster** (replication, sharding, monitoring) ko manage karne ke liye hote hain.

| **Role**            | **Description**                                                                                       |
|---------------------|-------------------------------------------------------------------------------------------------------|
| **clusterAdmin**    | Cluster par full control deta hai — sharding, replication, aur saare administrative tasks.            |
| **clusterManager**  | Cluster ko monitor aur manage karne deta hai, lekin `clusterAdmin` jitna powerful nahi hota.          |
| **clusterMonitor**  | Cluster status aur metrics ka **read-only access** deta hai (monitoring ke liye).                     |
| **hostManager**     | Underlying server instances aur MongoDB processes ko manage aur monitor karne ki permission deta hai. |

---

### ⚠️ Important Notes
- `root` role **sabse powerful** hota hai — carefully assign karein.
- Global aur cluster-level roles **production environments** me limited users ko hi dene chahiye.
- Security ke liye **least privilege principle** follow karna best practice hoti hai.

---

## 🔐 MongoDB: Enable Authorization (Authentication ON)

MongoDB me **Authorization enable** karne ka matlab hota hai ki ab:
- Har user ko database access ke liye **username & password** dena padega
- Bina login ke koi bhi database access nahi kar sakta

---

## 📁 Step 1: MongoDB Configuration File Locate Karein

Windows me MongoDB ka config file usually yahan hota hai:
```bash
C:\Program Files\MongoDB\Server<version>\bin\mongod.cfg
```

> `<version>` aapke MongoDB version ke according hota hai (jaise `6.0`, `7.0`)

---

## ⚙️ Step 2: Authorization Enable Karein

`mongod.cfg` file ko **Administrator mode** me open karein  
Aur niche diya gaya configuration add / update karein:

```yaml
security:
  authorization: enabled
```

## 📌 Ensure karein:

- ecurity: aur authorization: ka indentation sahi ho
- YAML format follow ho raha ho

## 🔄 Step 3: MongoDB Service Restart Karein
- Authorization enable karne ke baad MongoDB service restart karna mandatory hai.
1. Option 1: Services se
  - services.msc open karein
  - MongoDB Server find karein
  - Restart par click karein

2. Option 2: Command Line
  - net stop MongoDB
  - net start MongoDB

## 📊 Authorization Enable – Summary Table
| Step	| Action	              | Description                                         |
|-------|-----------------------|-----------------------------------------------------|
| 1	    | Locate mongod.cfg	    | MongoDB configuration file open karein              |
| 2	    | Enable authorization	| security.authorization: enabled add karein          |
| 3	    | Restart service	      | Changes apply karne ke liye MongoDB restart karein  |

## ⚠️ Important Notes
- Authorization enable karne se pehle at least ek admin/root user create kar lena chahiye
- Agar koi user nahi hoga, to database access lock ho sakta hai
- Production environment me yeh step mandatory hota hai for security

## ✅ After Authorization Enable
- db.createUser() se users create hote hain
- db.auth() ya connection string ke through login hota hai
- Role-Based Access Control (RBAC) enforce hota hai

---

