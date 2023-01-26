| Heading 1 | Heading 2 | Heading 3 |
|-----------|:-----------:|-----------:|
| Cell A1 | Cell A2 | Cell A3 | text
| Cell B1 | Cell B2 | Cell B3 | second line of text |

1. First item.
1. Second item.
1. Third item.



```javascript
let file = await fetch(
  'http:localhost:3000/DOC.md',
  {
    method: 'GET'
  }
)
file = await file.text()
```

```typescript
// filename: meu-arquivo.ts
function Markdown({ children, className }) {
  const ref = useRef(null)

  useEffect(() => {
    const html = marked.parse(children)
    if (ref.current) {
      ref.current.innerHTML = html
    }
  }, [ref, children])

  return <div ref={ref} className={clsx("markdown", className)}></div>
}
```
