class Node:
    def __init__(self, value):
        self._value = value
        self._parent = None
        self._children = []

    @property
    def value(self):
        return self._value

    @property
    def children(self):
        return self._children

    def add_child(self, node):
        if (node not in self._children): self._children.append(node)
        node.parent = self

    def remove_child(self, node):
        index = self._children.index(node)
        self._children.pop(index)
        node.parent = None

    @property
    def parent(self):
        return self._parent

    @parent.setter
    def parent(self, parent_node):
        if (parent_node == None): self._parent = None
        if (self.parent != None and self.parent != parent_node):
            self.parent.remove_child(self)
        if (parent_node != None and self.parent != parent_node):
            self._parent = parent_node
            self.parent.add_child(self)

    def depth_search(self, value, visited = {}):
        stack = [self]
        visited = {self: True}

        while len(stack) > 0:
            node = stack.pop()
            if (node._value == value): 
                return node

            for i in range(len(node.children) - 1, -1, -1):
                child = node.children[i]
                if child not in visited:
                    stack.append(child)
                    visited[child] = True
            
        return None

    def breadth_search(self, value):
        queue = [self]
        visited = {self: True}

        while len(queue) > 0:
            node = queue.pop(0)
            if (node._value == value): 
                return node

            for child in node.children:
                if child not in visited:
                    queue.append(child)
                    visited[child] = True
            
        return None


# child1 = Node("child1")
# parent = Node("parent")
# child2 = Node("child2")

# child1.parent = parent
# child2.parent = parent

# child1.add_child(child2)

# print(child1.children, [child2])
