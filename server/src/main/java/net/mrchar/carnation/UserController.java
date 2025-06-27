package net.mrchar.carnation;

import java.util.ArrayList;
import java.util.List;
import org.springframework.web.bind.annotation.*;

@RestController
public class UserController {
  private final List<User> users = new ArrayList<>();

  @GetMapping("/users")
  public List<User> listUsers() {
    return users;
  }

  @GetMapping("/users/{id}")
  public User getUser(@PathVariable String id) {
    return users.stream().filter(u -> u.getId().equals(id)).findFirst().orElse(null);
  }

  @PostMapping("/users")
  public User addUser(@RequestBody User user) {
    User found =
        users.stream().filter(u -> u.getId().equals(user.getId())).findFirst().orElse(null);
    if (found != null) {
      found.setName(user.getName());
      found.setAvatar(user.getAvatar());
      return found;
    }

    users.add(user);
    return user;
  }
}
