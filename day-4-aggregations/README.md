# Week 11 – Search Technologies (Elasticsearch)

## Day 4: Aggregations (26 Mar 2026)

### Overview

Today I focused on **aggregations in Elasticsearch**, which enable data analysis and summarization directly within the search engine.

While queries are used to retrieve documents, aggregations are used to **compute insights** such as counts, averages, distributions, and groupings.

---

### What are Aggregations?

Aggregations allow you to perform analytics on your data, similar to SQL operations like:

* `GROUP BY`
* `COUNT`
* `AVG`
* `SUM`

Example:

```json
GET /products/_search
{
  "size": 0,
  "aggs": {
    "avg_price": {
      "avg": { "field": "price" }
    }
  }
}
```

* `size: 0` → we only want aggregation results, not documents

---

### Types of Aggregations

Elasticsearch supports three main types:

1. **Metric Aggregations** → compute values
2. **Bucket Aggregations** → group documents
3. **Pipeline Aggregations** → operate on other aggregations

---

### Metric Aggregations

Used to calculate numeric values.

#### Average

```json
{
  "aggs": {
    "avg_price": {
      "avg": { "field": "price" }
    }
  }
}
```

#### Sum

```json
{
  "aggs": {
    "total_price": {
      "sum": { "field": "price" }
    }
  }
}
```

#### Min / Max

```json
{
  "aggs": {
    "max_price": {
      "max": { "field": "price" }
    }
  }
}
```

---

### Bucket Aggregations

Group documents into buckets.

#### Terms Aggregation (Grouping)

```json
{
  "aggs": {
    "categories": {
      "terms": { "field": "category.keyword" }
    }
  }
}
```

Example result:

* electronics → 120
* clothing → 80

---

#### Range Aggregation

```json
{
  "aggs": {
    "price_ranges": {
      "range": {
        "field": "price",
        "ranges": [
          { "to": 500 },
          { "from": 500, "to": 1000 },
          { "from": 1000 }
        ]
      }
    }
  }
}
```

---

### Nested Aggregations

Aggregations can be combined to create deeper insights.

Example:

```json
{
  "aggs": {
    "categories": {
      "terms": { "field": "category.keyword" },
      "aggs": {
        "avg_price": {
          "avg": { "field": "price" }
        }
      }
    }
  }
}
```

---

### Filtering Aggregations

You can combine queries and aggregations.

```json
{
  "query": {
    "term": { "category": "electronics" }
  },
  "aggs": {
    "avg_price": {
      "avg": { "field": "price" }
    }
  }
}
```

---

### Pipeline Aggregations

Used to perform calculations on aggregation results.

Example:

```json
{
  "aggs": {
    "sales_per_month": {
      "date_histogram": {
        "field": "date",
        "calendar_interval": "month"
      }
    }
  }
}
```

---

### Common Use Cases

* Product category counts
* Price distribution analysis
* Sales trends over time
* Dashboard metrics

---

### Best Practices

Key takeaways:

* Use keyword fields for grouping
* Keep aggregation sizes reasonable
* Combine queries with aggregations for filtered insights
* Use `size: 0` when only aggregations are needed

---

### Reflection

Aggregations transform Elasticsearch from a search engine into a powerful analytics tool. They enable real-time insights and are essential for building dashboards, reports, and data-driven features in modern applications.
