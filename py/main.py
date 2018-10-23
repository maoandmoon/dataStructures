from py.hashmap import Hashmap


def string_hash(string):
    return hash(string)


if __name__ == "__main__":
    hashmap = Hashmap(string_hash)

    i = 0
    for word in open('words.txt', 'r'):
        hashmap.put(word.rstrip(), i)
        i += 1

    print("%d words in file" % i)
    print("%d values in hashmap" % len(hashmap))
    print('num buckets: ', len(hashmap._buckets))
    print('num empty buckets: ', hashmap.get_num_empty_buckets())
    print('longest bucket: ', hashmap.get_longest_bucket())
    print('shortest bucket: ', hashmap.get_shortest_bucket())
    print('val in long bucket `weever`: ', hashmap.get('weever'))
    print('change_len: ', hashmap.change_len)