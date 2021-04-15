import { useEffect, useRef, useState } from 'react'
interface UseInView {
  root?: Element | null,
  threshold?: number | number[],
  rootMargin?: string
}

const useInView = ({ root = null, rootMargin = '0px', threshold = 1 }: UseInView): [
  (setNode: HTMLElement | any) => void, IntersectionObserverEntry
] => {

  const [entry, setEntry] = useState<any>({})
  const [node, setNode] = useState<HTMLElement>()
  const observer = useRef<IntersectionObserver>()

  useEffect(() => {
    if (observer.current) observer.current.disconnect()

    const options = {
      root,
      rootMargin,
      threshold,
    }

    observer.current = new IntersectionObserver(([entry]) => setEntry(entry), options);

    const { current: currentObserver } = observer

    if (node) currentObserver.observe(node)

    return () => currentObserver.disconnect()

  }, [node, rootMargin, root, threshold])

  return [setNode, entry]
}

export default useInView