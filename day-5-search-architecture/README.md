# Week 11 – Search Technologies (Elasticsearch)

## Day 5: Search Architecture (27 Mar 2026)

### Overview

Today I focused on **search architecture**, understanding how Elasticsearch fits into a larger system and how to design scalable, reliable search solutions.

Rather than just using Elasticsearch in isolation, the goal was to see how it integrates with databases, APIs, and frontend applications.

---

### Why Dedicated Search Architecture?

Traditional databases are not optimized for:

* Full-text search
* Relevance scoring
* Fuzzy matching

Elasticsearch is introduced as a **specialized search layer** to complement the primary database.

---

### High-Level Architecture

Typical setup:

```
User → Frontend → Backend API → Elasticsearch
                         ↘ Database (source of truth)
```

Key idea:

* **Database** = source of truth
* **Elasticsearch** = search-optimized copy of data

---

### Data Flow Patterns

#### 1. Write Flow (Indexing)

1. Data is written to the primary database
2. Data is indexed into Elasticsearch

Two approaches:

* **Synchronous indexing** (write to both)
* **Asynchronous indexing** (via queue/events)

---

#### 2. Read Flow (Search)

1. User performs a search
2. Backend queries Elasticsearch
3. Results are returned to the user

---

### Synchronization Strategies

Keeping Elasticsearch in sync with the database is critical.

Common approaches:

* Event-driven (Kafka, RabbitMQ)
* Change Data Capture (CDC)
* Periodic batch jobs

---

### Scaling Elasticsearch

Elasticsearch is designed for horizontal scaling.

Key concepts:

* **Sharding** → splits data across nodes
* **Replication** → ensures fault tolerance

Cluster setup:

```
Cluster
 ├── Node 1
 ├── Node 2
 └── Node 3
```

---

### Query Optimization

To ensure performance:

* Use filters instead of queries where possible
* Limit result size
* Avoid deep pagination
* Use proper mappings

---

### Caching

Elasticsearch provides caching mechanisms:

* Query cache
* Filter cache

External caching (e.g., Redis) can also be used.

---

### Failure Handling

Potential issues:

* Node failure
* Data inconsistency

Solutions:

* Use replicas
* Monitor cluster health
* Implement retry mechanisms

---

### Security Considerations

* Secure endpoints (HTTPS)
* Use authentication (API keys, tokens)
* Restrict access to cluster

---

### Real-World Example

E-commerce search system:

* Products stored in database
* Indexed into Elasticsearch
* Users search products using filters, keywords, and sorting

---

### Best Practices

Key takeaways:

* Keep Elasticsearch as a secondary data store
* Use event-driven architecture for syncing
* Design for scalability from the start
* Monitor performance and cluster health

---

### Reflection

Search architecture is about more than just queries—it’s about designing systems that are scalable, consistent, and performant. Understanding how Elasticsearch integrates with other components is essential for building real-world applications.
