#!/bin/sh

# use like this:
#
#     ID="66" TITLE="New Book" AUTHOR="New Author" ./scripts/book-update.sh
#

curl --include --request "PATCH" "http://localhost:3000/books/$ID"  \
  --header "Content-Type: application/json" \
  --data "{
    \"book\": {
      \"title\": \"$TITLE\",
      \"author\": \"$AUTHOR\"
    }
  }"
