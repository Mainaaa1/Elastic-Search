# Week 11 – Search Technologies (Elasticsearch)

## Day 2: Indexing & Mapping (24 Mar 2026)

### Overview

Today I focused on how data is stored and structured in Elasticsearch through **indexing** and **mapping**.

Understanding these concepts is critical because they directly affect search accuracy, performance, and how queries behave.

---

### What is Indexing?

**Indexing** is the process of storing data in Elasticsearch so it can be searched efficiently.

When a document is indexed:

1. It is converted into JSON
2. Fields are analyzed (tokenized, normalized)
3. Data is stored in an inverted index

Example:

```
POST /products/_doc
{
  "name": "Gaming Laptop",
  "price": 1500,
  "category": "electronics"
}
```

---

### What is Mapping?

**Mapping** defines how fields in a document are stored and indexed.

It is similar to a schema in relational databases.

Mapping controls:

* Data types
* Indexing behavior
* Search behavior

---

### Dynamic Mapping

By default, Elasticsearch uses **dynamic mapping**.

* Automatically detects field types
* Creates mappings on the fly

Example:

```json
{
  "name": "Laptop",
  "price": 1200
}
```

Elasticsearch infers:

* name → text
* price → number

Advantages:

* Fast setup
* Flexible

Disadvantages:

* Less control
* Can lead to incorrect mappings

---

### Explicit Mapping

Explicit mapping allows defining field types manually.

Example:

```json
PUT /products
{
  "mappings": {
    "properties": {
      "name": { "type": "text" },
      "price": { "type": "float" },
      "category": { "type": "keyword" }
    }
  }
}
```

Advantages:

* Full control over data structure
* Better performance and accuracy

---

### Common Field Types

| Type            | Description                 |
| --------------- | --------------------------- |
| text            | Full-text search (analyzed) |
| keyword         | Exact match (not analyzed)  |
| integer / float | Numeric values              |
| boolean         | true/false                  |
| date            | Date values                 |

---

### Text vs Keyword

Understanding the difference is critical:

* **text** → analyzed (tokenized for search)
* **keyword** → not analyzed (exact match)

Example:

```
"name": "Gaming Laptop"
```

* text → searchable by words like "gaming"
* keyword → must match entire string

---

### Analyzers

Analyzers process text during indexing.

They perform:

* Tokenization (splitting text into words)
* Lowercasing
* Removing punctuation

Example:

"Gaming Laptop" → ["gaming", "laptop"]

---

### Reindexing

Mappings cannot be changed easily after index creation.

To update mappings:

1. Create a new index
2. Apply new mapping
3. Reindex data

Example:

```
POST /_reindex
{
  "source": { "index": "old_index" },
  "dest": { "index": "new_index" }
}
```

---

### Best Practices

Key takeaways:

* Define mappings explicitly in production
* Use keyword for filtering and sorting
* Use text for full-text search
* Avoid unnecessary fields
* Plan mappings early to avoid reindexing

---

### Reflection

Indexing and mapping form the foundation of Elasticsearch. Properly structuring data ensures efficient search and accurate results. Today’s learning emphasized the importance of planning data models carefully before indexing large datasets.
