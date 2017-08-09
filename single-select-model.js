emos.common.factory('SingleSelectModel', [
    function() {
        function SingleSelectModel(items, options) {
            var _this = this;
            this.options = options || {};
            _this.setItems(items);
        }

        SingleSelectModel.prototype = {
            setItems: function (items) {
                if (items.data) {
                    items = items.data;
                }
                if (this.options.sort) {
                    items = _.sortBy(items, ['Name']);
                }
                this.allItems = items;
                this.selectedItem = null;
                this.itemsIndex = _.keyBy(this.allItems, 'Id');
            },
            select: function (item) {
                if (this.selectedItem == item) {
                    return false;
                } else {
                    this.selectedItem = item;
                    return true;
                }
            },
            selectById: function (selectedId) {
                var item = this.itemsIndex[selectedId];
                this.select(item);
            },
            getItemById: function(id) {
                return this.itemsIndex[id];
            }
        };

        return SingleSelectModel;
    }
]);